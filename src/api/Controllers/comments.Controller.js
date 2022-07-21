import validation from "#validations/comments.Validation"
import model from "#models/comments.Model"

const GET = async (req, res) => { 
	try{
		let comments = await model.GET()

		if(!comments?.length) throw new Error("No comments found")

		res.status(200).json({
			status: 200,
			message: "Comments successfully fetched",
			data: comments
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

		let comment = await model.GET_ONE({...req.params})

		if(!comment) throw new Error("Comment not found!")

		res.status(200).json({
			status: 200,
			message: "Comment successfully fetched",
			data: comment
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
		
		if(!(await model.checkProduct({ ...req.body }))?.length) throw new Error("Product not found")

		if(!(await model.checkUser({ ...req.body }))?.length) throw new Error("User not found")

		const comment = await model.POST({ ...req.body })

		if(!comment) throw new Error("Comment not found!")

		res.status(200).json({
			status: 200,
			message: "Comment successfully created",
			data: comment
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
		if(req?.user?.user_role != "admin") throw new Error("You are not authorized to perform this action")

		if(!(await model.checkProduct({ ...req.body }))?.length) throw new Error("Product not found")

		if(!(await model.checkUser({ ...req.body }))?.length) throw new Error("User not found")

		if(validation.PUT({ ...req.body })?.status != true) throw new Error(validation.PUT({ ...req.body }).message)

		const comment = await model.PUT({...req.body})

		if(!comment) throw new Error("Comment not found!")

		res.status(200).json({
			status: 200,
			message: "Comment successfully updated",
			data: comment
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
		if(req?.user?.user_role != "admin") throw new Error("You are not authorized to perform this action")

		if(validation.DELETE({ ...req.body })?.status != true) throw new Error(validation.DELETE({ ...req.body }).message)

		const comment = await model.DELETE({...req.body})

		if(!comment?.length) throw new Error("Comment not found!")

		res.status(200).json({
			status: 200,
			message: "Comment successfully deleted!",
			data: comment
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
	POST,
	PUT,
	DELETE,
	GET_ONE
}