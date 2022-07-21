import query from "#query/auth.Query"
import db from "#config/db"

const LOGIN = async ({user_phone, user_password}) => {
	const [ data ] = await db(query.LOGIN, user_phone, user_password)
	return data
}

const REGISTER = async ({user_phone, user_password, user_first_name, user_last_name, user_telegram_id}) => {
	const [ data ] = await db(query.REGISTER, user_first_name, user_last_name, user_phone, user_password, user_telegram_id)
	return data
}

const checkUser = async ({user_phone}) => {
	const data = await db(query.checkUser, user_phone)
	return data
}


const checkTelegramId = async ({ user_telegram_id }) => {
	const data = await db(query.checkTelegramId, user_telegram_id)
	return data
}


export default {
	LOGIN,
	REGISTER,
	checkUser,
	checkTelegramId
}