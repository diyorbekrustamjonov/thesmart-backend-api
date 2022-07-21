import validation from "#validations/products.Validation"
import model from "#models/products.Model"

import {resolve} from "path"

const GET = async (req, res) => { 
	try{
		let products = await model.GET()

		if(!products) throw new Error("No products found")

		products = products.map(product => {
			product.product_images = product.product_images.map(image => {
				image = `${process.env.APP_URL}/products/${image}`
				return image 
			})
			product.slug = "/" + product.product_name.replace(/\s+/g, '-').toLowerCase()
			return product
		})


		res.status(200).json({
			status: 200,
			message: "Products successfully fetched",
			data: products
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

		let products = await model.GET_ONE({ ...req.params })

		if(!products?.length) throw new Error("No product found")

		products = products.map(product => {
			product.product_images = product.product_images.map(image => {
				image = `${process.env.APP_URL}/products/${image}`
				return image 
			})
			product.slug = "/" + product.product_name.replace(/\s+/g, '-').toLowerCase()
			return product
		})

		res.status(200).json({
			status: 200,
			message: "Product successfully fetched",
			data: products
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
		let files = Object.values(req.files)

		files = files.map(file => {
			if(file.mimetype != "image/jpeg" && file.mimetype != "image/png" && file.size < 50000) throw new Error("Invalid file type")
			return Date.now() + "-" + file.name.replace(/\s+/g, '-').toLowerCase()
		})

		// json parse '["black","white","silver"]' to array
		// get json parse array and map to array of strings
		req.body.product_details = JSON.parse(JSON.stringify(JSON.parse(req.body.product_details)))
		req.body.product_colors = JSON.parse(req.body.product_colors)

		if(validation.POST({ ...req.body, product_images: files })?.status != true) throw new Error(validation.POST({ ...req.body, product_images: files  }).message)

		if(!(await model.checkBrand({ ...req.body }))?.length) throw new Error("Brand not found")

		if(!(await model.checkCategory({ ...req.body }))?.length) throw new Error("Category not found")

		const product = await model.POST({ ...req.body, product_images: files })

		if(!product?.length) throw new Error("Product not created!")

		const dataFiles = Object.values(req.files)
		
		for(let i = 0; i < dataFiles.length; i++){
			await dataFiles[i].mv(resolve(process.cwd(), "src", "uploads",  "products", files[i]))
		}


		res.status(200).json({
			status: 200,
			message: "Product successfully created",
			data: product
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
		let files = Object.values(req.files)
		if(req.files){
			files = files.map(file => {
				// if mimetype is not image, and size 
				if(file.mimetype != "image/jpeg" && file.mimetype != "image/png" && file.size < 50000) throw new Error("Invalid file type")
				return Date.now() + "-" + file.name.replace(/\s+/g, '-').toLowerCase()

			})

			if(validation.PUT({ ...req.body, product_images: files })?.status != true) throw new Error(validation.PUT({ ...req.body, product_images: files  }).message)
	
			if(!(await model.checkProduct({ ...req.body }))?.length) throw new Error("Product not found")

			if(!(await model.checkBrand({ ...req.body }))?.length) throw new Error("Brand not found")
	
			if(!(await model.checkCategory({ ...req.body }))?.length) throw new Error("Category not found")
			
			const product = await model.PUT({ ...req.body, product_images: files })
	
			if(!product?.length) throw new Error("Product not updated!")
	
			const dataFiles = Object.values(req.files)
			
			dataFiles.forEach(file => {
				file.mv(resolve(process.cwd(), "src", "uploads",  "products", Date.now() + "-" + file.name.replace(/\s+/g, '-').toLowerCase()))
			})
	
	
			res.status(200).json({
				status: 200,
				message: "Product successfully updated",
				data: product
			})
		}else{
			if(validation.PUT({ ...req.body})?.status != true) throw new Error(validation.PUT({ ...req.body }).message)

			if(!(await model.checkBrand({ ...req.body }))?.length) throw new Error("Brand not found")
	
			if(!(await model.checkProduct({ ...req.body }))?.length) throw new Error("Product not found")

			if(!(await model.checkCategory({ ...req.body }))?.length) throw new Error("Category not found")
	
			const product = await model.PUT({ ...req.body })
	
			if(!product?.length) throw new Error("Product not created!")
	
	
			res.status(200).json({
				status: 200,
				message: "Product successfully created",
				data: product
			})
		}


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

		if(!(await model.checkProduct({ ...req.body }))?.length) throw new Error("Product not found")

		const product = await model.DELETE({ ...req.body })

		if(!product?.length) throw new Error("Product not deleted!")

		res.status(200).json({
			status: 200,
			message: "Product successfully deleted",
			data: product
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