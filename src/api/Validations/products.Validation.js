import Joi from "joi"

const GET_ONE = (data) => {
	const schema = Joi.object({
		product_id: Joi.number().required()
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
		product_name: Joi.string().required(),
		product_brand_id: Joi.number().required(),
		product_category_id: Joi.number().required(),
		product_price: Joi.number().required(),
		product_images: Joi.array().required(),
		product_colors: Joi.array().required(),
		product_details: Joi.object().required(),
		product_description: Joi.string().required(),
		product_stock: Joi.number().required(),
		product_status_new: Joi.number(),
		product_status_sale: Joi.number()
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
		product_id: Joi.number().required(),
		product_name: Joi.string(),
		product_brand_id: Joi.number(),
		product_category_id: Joi.number(),
		product_price: Joi.number(),
		product_images: Joi.array().items(Joi.string()),
		product_colors: Joi.array(),
		product_details: Joi.object(),
		product_description: Joi.string(),
		product_stock: Joi.number(),
		product_status_new: Joi.number(),
		product_status_sale: Joi.number()
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
		product_id: Joi.number().required(),
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