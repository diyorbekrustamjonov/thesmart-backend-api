const LOGIN = `
	select 
		user_id,
		user_telegram_id,
		user_first_name,
		user_last_name,
		user_phone,
		user_password,
		user_role,
		user_created_at,
		user_updated_at,
		user_deleted_at
	from users
	where user_deleted_at is null and user_phone = $1::varchar and user_password = md5($2::varchar)
`

const REGISTER = `
	insert into users (user_first_name, user_last_name, user_phone, user_password, user_telegram_id) values
	($1::varchar, $2::varchar, $3::varchar, md5($4::varchar), $5::varchar)
	returning *
`

const checkUser = `
	select 
		* 
	from users 
	where user_deleted_at is null and user_phone = $1::varchar
`

const checkTelegramId = `
	select 
		* 
	from users 
	where user_deleted_at is null and user_phone = $1::varchar
`

export default{
	LOGIN,
	REGISTER,
	checkUser,
	checkTelegramId
}