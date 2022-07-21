import query from "#query/brands.Query"
import db from "#config/db"

const GET = async () => {
	const data = await db(query.GET)
	return data
}

const GET_ONE = async ({brand_id}) => {
	const data = await db(query.GET_ONE, brand_id)
	return data
}

const POST = async ({ brand_name }) => {
	const [ rows ] = await db(query.POST, brand_name)
	return rows
}

const PUT = async ({ brand_id, brand_name}) => {
	const [ rows ] = await db(query.PUT, brand_id, brand_name)
	return rows
}

const DELETE = async ({ brand_id }) => {
	const [ rows ] = await db(query.DELETE, brand_id)
	return rows
}

const checkBrand = async ({ brand_name }) => {
	const [ rows ] = await db(query.checkBrand, brand_name)
	return rows
}

export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE,
	checkBrand
}