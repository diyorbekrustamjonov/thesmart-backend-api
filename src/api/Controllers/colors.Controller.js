import validation from "#validations/colors.Validation"
import model from "#models/colors.Model"

const GET = async (req, res) => { 
	try{
		const colors = await model.GET()

		if(!colors) throw new Error("Colors not found")

		res.status(200).json({
			status: 200,
			message: "Colors successfully fetched",
			data: colors
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}


const GET_ONE = async (req, res) => { 
	try{
		if(validation.GET_ONE({ ...req.params })?.status != true) throw new Error(validation.GET_ONE({ ...req.params }).message)

		const color = await model.GET_ONE({...req.params})

		if(!color) throw new Error("Color not found")

		res.status(200).json({
			status: 200,
			message: "Color successfully fetched",
			data: color
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}


const POST = async (req, res) => { 
	try{
        if(req.user.user_role != "admin") throw new Error("You are not authorized to perform this action")

		if(validation.POST({ ...req.body })?.status != true) throw new Error(validation.POST({ ...req.body }).message)

		if(await model.checkColor({ ...req.body })) throw new Error("Color already exists")
		
		const category = await model.POST({ ...req.body });


		res.status(200).json({
			status: 200,
			message: "Category successfully created",
			data: category
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}


const PUT = async (req, res) => {
	try{
		if(req.user.user_role != "admin") throw new Error("You are not authorized to perform this action")

		if(validation.PUT({ ...req.body })?.status != true) throw new Error(validation.PUT({ ...req.body }).message)
		
		if(await model.checkColor({ ...req.body })) throw new Error("Color already exists")

		const color = await model.PUT({ ...req.body });

		if(!color) throw new Error("Color not found")

		res.status(200).json({
			status: 200,
			message: "Color successfully updated",
			data: color
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}

const DELETE = async (req, res) => {
	try{
		if(req.user.user_role != "admin") throw new Error("You are not authorized to perform this action")

		if(validation.DELETE({ ...req.body })?.status != true) throw new Error(validation.DELETE({ ...req.body }).message)

		const color = await model.DELETE({...req.body});

		if(!color) throw new Error("Color not found")

		res.status(200).json({
			status: 200,
			message: "Color successfully deleted",
			data: color
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}

export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE
}