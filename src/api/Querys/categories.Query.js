const GET = `
	select 
		category_id,
		category_name,
		category_created_at,
		category_updated_at,
		category_deleted_at
	from categories
	where category_deleted_at is null
`;

const GET_ONE = `
	select 
		category_id,
		category_name,
		category_created_at,
		category_updated_at,
		category_deleted_at
	from categories
	where category_deleted_at is null and category_id = $1::int
`;


const POST = `
	insert into categories (category_name) values ($1::varchar)
	returning *
`

const PUT = `
	update categories set
		category_name = (
				case
					when length($2) > 0 then $2::varchar
					else category_name
				end
		),
		category_updated_at = now()
	where category_deleted_at is null and category_id = $1::int
	returning *
`

const DELETE = `
	update categories set
	category_deleted_at = now()
	where category_deleted_at is null and category_id = $1::int
	returning *
`

const checkCategory = `
	select 
		category_id,
		category_name,
		category_created_at,
		category_updated_at,
		category_deleted_at
	from categories
	where category_deleted_at is null and category_name ILIKE $1::varchar
`


export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE,
	checkCategory
}