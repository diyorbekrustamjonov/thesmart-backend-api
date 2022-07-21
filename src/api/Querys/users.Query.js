const GET = `
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
	where user_deleted_at is null;
`;

const GET_ONE = `
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
	where user_deleted_at is null and user_id = $1::int;
`;

const POST = `
	insert into users (user_telegram_id, user_first_name, user_last_name, user_phone, user_password, user_role) values
	($1::varchar, $2::varchar, $3::varchar, $4::varchar, md5($5::varchar), $6::varchar)
	returning *
`

const PUT = `
	update users set
		user_telegram_id = (
			case
				when length($2) > 0 then $2::varchar
				else user_telegram_id
			end
		),
		user_first_name = (
			case
				when length($3) > 0 then $3::varchar
				else user_first_name
			end
		),
		user_last_name = (
			case
				when length($4) > 0 then $4::varchar
				else user_last_name
			end
		),
		user_phone = (
			case
				when length($5::varchar) > 0 then $5::varchar
				else user_phone::varchar
			end
		),
		user_password = (
			case
				when length($6::varchar) > 0 then $6::varchar
				else md5(user_password::varchar)
			end
		),
		user_role = (
			case
				when length($7::varchar) > 0 then $7::varchar
				else user_role::varchar
			end
		),
		user_updated_at = now()
	where user_deleted_at is null and user_id = $1::int
	returning *
`

const DELETE = `
	update users set
		user_deleted_at = now()
	where user_deleted_at is null and user_id = $1::int
	returning *
`


const checkPhone = `
	select
		*
	from users
	where user_deleted_at is null and user_phone = $1::varchar
`

const checkTelegramId = `
	select
		*
	from users
	where user_deleted_at is null and user_telegram_id = $1::varchar
`

export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE,
	checkPhone,
	checkTelegramId
}