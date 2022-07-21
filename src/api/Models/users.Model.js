import query from "#query/users.Query"
import db from "#config/db"

const GET = async () => {
	const data = await db(query.GET)
	return data
}

const GET_ONE = async ({user_id}) => {
	const [ data ] = await db(query.GET_ONE, user_id)
	return data
}

const POST = async ({ user_telegram_id, user_first_name, user_last_name, user_phone, user_password, user_role }) => {
	const [ data ] = await db(query.POST, user_telegram_id, user_first_name, user_last_name, user_phone, user_password, user_role)
	return data
}

const PUT = async ({ user_id, user_telegram_id, user_first_name, user_last_name, user_phone, user_password, user_role}) => {
	const [ data ] = await db(query.PUT, user_id, user_telegram_id, user_first_name, user_last_name, user_phone, user_password, user_role)
	return data
}

const DELETE = async ({ user_id }) => {
	const [ data ] = await db(query.DELETE, user_id)
	return [ data ]
}

const checkPhone = async ({ user_phone }) => {
	const [ data ] = await db(query.checkPhone, user_phone)
	return data
}

const checkTelegramId = async ({ user_telegram_id }) => {
	const [ data ] = await db(query.checkTelegramId, user_telegram_id)
	return data
}


export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE,
	checkPhone,
	checkTelegramId
}