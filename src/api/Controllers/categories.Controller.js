import validation from "#validations/categories.Validation"
import model from "#models/categories.Model"

const GET = async (req, res) => { 
	try{
		const categories = await model.GET()

		if(!categories) throw new Error("Categories not found")

		res.status(200).json({
			status: 200,
			message: "Categories successfully fetched",
			data: categories
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

		const category = await model.GET_ONE({...req.params})

		if(!category?.length) throw new Error("Category not found")

		res.status(200).json({
			status: 200,
			message: "Category successfully fetched",
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


const POST = async (req, res) => { 
	try{
		if(req.user.user_role != "admin") throw new Error("You are not authorized to perform this action")

		if(validation.POST({ ...req.body })?.status != true) throw new Error(validation.POST({ ...req.body }).message)

		if(await model.checkCategory({ ...req.body })) throw new Error("Category already exist!") 
		
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
		
		if(await model.checkCategory({ ...req.body })) throw new Error("Category already exist!") 

		const category = await model.PUT({ ...req.body });

		if(!category) throw new Error("Category not found")

		res.status(200).json({
			status: 200,
			message: "Category successfully updated",
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

const DELETE = async (req, res) => {
	try{
		if(req.user.user_role != "admin") throw new Error("You are not authorized to perform this action")

		if(validation.DELETE({ ...req.body })?.status != true) throw new Error(validation.DELETE({ ...req.body }).message)

		const category = await model.DELETE({...req.body});

		if(!category) throw new Error("Category not found")

		res.status(200).json({
			status: 200,
			message: "Category successfully deleted",
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

export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE
}