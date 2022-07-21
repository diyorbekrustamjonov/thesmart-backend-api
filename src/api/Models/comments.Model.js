import query from "#query/comments.Query"
import db from "#config/db"

const GET = async () => {
	const data = await db(query.GET)
	return data
}

const GET_ONE = async ({ comment_id }) => {
	const data = await db(query.GET_ONE, comment_id)
	return data
}

const POST = async ({ comment_user_id, comment_product_id, comment_status, comment_content, comment_stars}) => {
	const data = await db(query.POST, comment_user_id, comment_product_id, comment_status, comment_content, comment_stars)
	return data
}

const PUT = async ({comment_user_id, comment_product_id, comment_status, comment_content, comment_stars,comment_id }) => {
	const data = await db(query.PUT, comment_user_id, comment_product_id, comment_status, comment_content, comment_stars, comment_id)
	return data
}

const DELETE = async ({ comment_id }) => {
	const data = await db(query.DELETE, comment_id)
	return data
}
const checkProduct = async ({ comment_product_id }) => {
	const data = await db(query.checkProduct, comment_product_id)
	return data
}

const checkUser = async ({ comment_user_id }) => {
	const data = await db(query.checkUser, comment_user_id)
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