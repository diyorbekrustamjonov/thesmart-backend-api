import query from "#query/orders.Query"
import db from "#config/db"

const GET = async () => {
	const data = await db(query.GET)
	return data
}

const GET_ONE = async ({ order_id }) => {
	const data = await db(query.GET_ONE, order_id)
	return data
}

const POST = async ({ order_user_id, order_product_id, order_quantity, order_address }) => {
	const data = await db(query.POST, order_user_id, order_product_id, order_quantity, order_address)
	return data
}

const PUT = async ({order_id, order_user_id, order_product_id, order_quantity, order_status, order_address }) => {
	const data = await db(query.PUT, order_user_id, order_product_id, order_quantity, order_status, order_address, order_id)
	return data
}

const DELETE = async ({ order_id }) => {
	const data = await db(query.DELETE, order_id)
	return data
}
const checkProduct = async ({ order_product_id }) => {
	const data = await db(query.checkProduct, order_product_id)
	return data
}

const checkUser = async ({ order_user_id }) => {
	const data = await db(query.checkUser, order_user_id)
	return data
}

export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE,
	checkProduct,
	checkUser
}