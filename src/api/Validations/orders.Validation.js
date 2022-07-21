import Joi from "joi"

const GET_ONE = (data) => {
	const schema = Joi.object({
		order_id: Joi.number().required() 
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
		order_user_id: Joi.number().required(), 
		order_product_id: Joi.number().required(), 
		order_quantity: Joi.number().required(),
		order_address: Joi.string().required()
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
		order_id: Joi.number().required(),
		order_user_id: Joi.number(), 
		order_product_id: Joi.number(), 
		order_quantity: Joi.number(),
		order_status: Joi.string(),
		order_address: Joi.string()
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
		order_id: Joi.number().required()
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