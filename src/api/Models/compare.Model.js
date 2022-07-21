import query from "#query/compare.Query"
import db from "#config/db"

const GET_ONE = async ({ product_id }) => {
	const data = await db(query.GET_ONE, product_id)
	return data
}

const checkProduct = async ({ product_id }) => {
	const data = await db(query.checkProduct, product_id)
	return data
}

export default {
	GET_ONE,
	checkProduct
}