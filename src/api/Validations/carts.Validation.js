import Joi from "joi"

const GET_ONE = (data) => {
	const schema = Joi.object({
		cart_id: Joi.number().required() 
	})
	try{
		if(schema.validate(data).error) {
			return {
				status: false,
				message: schema.validate(data).error.details[0].message,
			}
		}
		return {
			status: true,
		}
	}catch(err){
		return err
	}	
}

const POST = (data) => {
	const schema = Joi.object({
        cart_user_id: Joi.number(),
        cart_product_id: Joi.number().required(),
        cart_quantity: Joi.number().required(),
	})
	try{
		if(schema.validate(data).error) {
			return {
				status: false,
				message: schema.validate(data).error.details[0].message,
			}
		}
		return {
			status: true,
		}
	}catch(err){
		return err
	}
}

const PUT = (data) => {
	const schema = Joi.object({
        cart_id: Joi.number().required(),
        cart_user_id: Joi.number().required(),
        cart_product_id: Joi.number(),
        cart_quantity: Joi.number().required(),
	})
	try{
		if(schema.validate(data).error) {
			return {
				status: false,
				message: schema.validate(data).error.details[0].message,
			}
		}
		return {
			status: true,
		}
	}catch(err){
		return err
	}
}

const DELETE = (data) => {
	const schema = Joi.object({
		cart_id: Joi.number().required()
	})
	try{
		if(schema.validate(data).error) {
			return {
				status: false,
				message: schema.validate(data).error.details[0].message,
			}
		}
		return {
			status: true,
		}
	}catch(err){
		return err
	}
}

export default {
	GET_ONE,
	POST,
	PUT,
	DELETE
}