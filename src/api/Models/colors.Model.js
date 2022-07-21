import query from "#query/colors.Query"
import db from "#config/db"

const GET = async () => {
	const data = await db(query.GET)
	return data
}


const GET_ONE = async ({ color_id }) => {
	const [ data ] = await db(query.GET_ONE, color_id)
	return data
}

const POST = async ({ color_name }) => {
	const [ rows ] = await db(query.POST, color_name)
	return rows
}

const PUT = async ({ color_id, color_name}) => {
	const [ rows ] = await db(query.PUT, color_id, color_name)
	return rows
}

const DELETE = async ({ color_id }) => {
	const [ rows ] = await db(query.DELETE, color_id)
	return rows
}

const checkColor =  async ({ color_name }) => {
	const [ rows ] = await db(query.checkColor, color_name)
	return rows
}

export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE,
	checkColor
}