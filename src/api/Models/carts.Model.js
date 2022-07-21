import query from "#query/carts.Query"
import db from "#config/db"

const GET = async () => {
	const data = await db(query.GET)
	return data
}

const GET_ONE = async ({ cart_id }) => {
	const data = await db(query.GET_ONE, cart_id)
	return data
}

const POST = async ({ cart_user_id, cart_product_id, cart_quantity}) => {
	const data = await db(query.POST, cart_user_id, cart_product_id, cart_quantity)
	return data
}

const PUT = async ({cart_id, cart_user_id, cart_product_id, cart_quantity }) => {
	const [ data ] = await db(query.PUT, cart_id, cart_user_id, cart_product_id, cart_quantity )
	return data
}

const DELETE = async ({ cart_id }) => {
	const [ data ] = await db(query.DELETE, cart_id)
	return data
}

const checkUserId = async ({ cart_user_id }) => {
	const [ data ] = await db(query.checkUserId, cart_user_id)
	return data
}

const checkProductId = async ({ cart_product_id }) => {
	const [ data ] = await db(query.checkProductId, cart_product_id)
	return data
}

export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE,
	checkUserId,
	checkProductId
}