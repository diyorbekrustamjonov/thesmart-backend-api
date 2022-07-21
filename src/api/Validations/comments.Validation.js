import Joi from "joi"

const GET_ONE = (data) => {
	const schema = Joi.object({
		comment_id: Joi.number().required() 
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
		comment_user_id: Joi.number().required(),
		comment_product_id: Joi.number().required(),
		comment_status: Joi.string(),
		comment_content: Joi.string().required(),
		comment_stars: Joi.number().required()
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
		comment_id: Joi.number().required(),
		comment_user_id: Joi.number(),
		comment_product_id: Joi.number(),
		comment_status: Joi.string(),
		comment_content: Joi.string(),
		comment_stars: Joi.number()
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
		comment_id: Joi.number().required()
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