import Joi from "joi"

const GET_ONE = (data) => {
	const schema = Joi.object({
		brand_id: Joi.number().required()
	})
	try{
		if(schema.validate(data).error) {
			return {
				status: false,
				message: schema.validate(data).error.details[0].message,
			}
		}
		return {
			status: true
		}
	}catch(err){
		return err
	}
}

const POST = (data) => {
	const schema = Joi.object({
		brand_name: Joi.string().min(3).required()
	})
	try{
		if(schema.validate(data).error) {
			return {
				status: false,
				message: schema.validate(data).error.details[0].message,
			}
		}
		return {
			status: true
		}
	}catch(err){
		return err
	}
}

const PUT = (data) => {
	const schema = Joi.object({
		brand_id: Joi.number().required(),
		brand_name: Joi.string().min(3)
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
		brand_id: Joi.number().required()
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
	DELETE,
	POST,
	PUT,
}