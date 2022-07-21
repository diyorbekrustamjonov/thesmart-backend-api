import query from "#query/products.Query"
import db from "#config/db"

const GET = async () => {
	const data = await db(query.GET)
	return data
}

const GET_ONE = async ({product_id}) => {
	const data = await db(query.GET_ONE, product_id)
	return data
}
const POST = async ({product_name, product_category_id, product_brand_id, product_price, product_images, product_colors, product_details, product_description, product_stock, product_status_new, product_status_sale}) => {
	const data = await db(query.POST, product_name, product_category_id, product_brand_id, product_price, JSON.stringify(product_images), JSON.stringify(product_colors), JSON.stringify(product_details), product_description, product_stock, product_status_new, product_status_sale)
	return data
}

const PUT = async ({product_id, product_name, product_category_id, product_brand_id, product_price, product_images, product_colors, product_details, product_description, product_stock, product_status_new, product_status_sale}) => {
	const data = await db(query.PUT,product_id, product_name, product_category_id, product_brand_id, product_price, JSON.stringify(product_images), JSON.stringify(product_colors), JSON.stringify(product_details), product_description, product_stock, product_status_new, product_status_sale)
	return data
}

const DELETE = async ({product_id}) => {
	const data = await db(query.DELETE, product_id)
	return data
}

const checkBrand = async ({product_brand_id}) => {
	const data = await db(query.CHECK_BRAND, product_brand_id)
	return data
}

const checkCategory = async ({product_category_id}) => {
	const data = await db(query.CHECK_CATEGORY, product_category_id)
	return data
}

const checkProduct = async ({product_id}) => {
	const data = await db(query.CHECK_PRODUCT, product_id)
	return data
}


export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE,
	checkBrand,
	checkCategory,
	checkProduct
}