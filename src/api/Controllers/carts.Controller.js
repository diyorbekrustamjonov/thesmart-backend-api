import validation from "#validations/carts.Validation"
import model from "#models/carts.Model"

const GET = async (req, res) => { 
	try{
		let carts = await model.GET()

		if(!carts?.length) throw new Error("No carts found")

		carts = carts.map(cart => {
			cart.cart_total_price = cart.cart_quantity * cart.product_price
			return cart
		})

		res.status(200).json({
			status: 200,
			message: "Carts successfully fetched",
			data: carts
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

		let cart = await model.GET_ONE({...req.params})

		if(!cart?.length) throw new Error("Cart not found!")

		cart.cart_total_price = cart.cart_quantity * cart.product_price

		res.status(200).json({
			status: 200,
			message: "Cart successfully fetched",
			data: cart
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
		if(validation.POST({ ...req.body })?.status != true) throw new Error(validation.POST({ ...req.body }).message)

		if(!(await model.checkUserId({ cart_user_id: req?.body?.cart_user_id ? req?.body?.cart_user_id  : req.user.user_id  }))) throw new Error("User not found!")
		if(!(await model.checkProductId({ ...req.body}))) throw new Error("Product not found!")
		
		const cart = await model.POST({...req.body, cart_user_id: req?.body?.cart_user_id ? req?.body?.cart_user_id  : req.user.user_id })

		if(!cart) throw new Error("Cart not found!")

		res.status(200).json({
			status: 200,
			message: "Cart successfully created",
			data: cart
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
		if(validation.PUT({ ...req.body, cart_user_id: req?.body?.cart_user_id ? req?.body?.cart_user_id  : req.user.user_id })?.status != true) throw new Error(validation.PUT({ ...req.body }).message)
		
		if(!(await model.checkUserId({ cart_user_id: req?.body?.cart_user_id ? req?.body?.cart_user_id  : req.user.user_id  }))) throw new Error("User not found!")
		
		const cart = await model.PUT({...req.body})

		if(!cart) throw new Error("Cart not found!")

		res.status(200).json({
			status: 200,
			message: "Cart successfully updated",
			data: cart
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
		if(validation.DELETE({ ...req.body })?.status != true) throw new Error(validation.DELETE({ ...req.body }).message)

		const cart = await model.DELETE({...req.body})

		if(!cart) throw new Error("Cart not found!")

		res.status(200).json({
			status: 200,
			message: "Cart successfully deleted!",
			data: cart
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