import validation from "#validations/brands.Validation"
import model from "#models/brands.Model"

const GET = async (req, res) => { 
	try{
		const brands = await model.GET()

		res.status(200).json({
			status: 200,
			message: "Brands successfully fetched",
			data: brands
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
		if(validation.GET_ONE({ ...req.params })?.status != true) throw new Error(validation.POST({ ...req.params }).message)

		const brand = await model.GET_ONE({...req.params})

		if(!brand?.length) throw new Error("Brand not found")

		res.status(200).json({
			status: 200,
			message: "Brand successfully fetched",
			data: brand
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
		
		if(await model.checkBrand({ ...req.body })) throw new Error("Brand already exists")

		const brands = await model.POST({ ...req.body });

		if(!brands) throw new Error("Brand not found")

		res.status(200).json({
			status: 200,
			message: "Brands successfully created",
			data: brands
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
		
		if(await model.checkBrand({ ...req.body })) throw new Error("Brand already exists")

		const brand = await model.PUT({...req.body});

		if(!brand) throw new Error("Brand not found")

		res.status(200).json({
			status: 200,
			message: "Brand successfully updated",
			data: brand
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

		const brand = await model.DELETE({...req.body});

		if(!brand) throw new Error("Brand not found")

		res.status(200).json({
			status: 200,
			message: "Brand successfully deleted",
			data: brand
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