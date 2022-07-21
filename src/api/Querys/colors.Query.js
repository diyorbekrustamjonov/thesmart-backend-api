const GET = `
	select 
		color_id,
		color_name,
		color_created_at,
		color_updated_at,
		color_deleted_at
	from colors
	where color_deleted_at is null
`;

const GET_ONE = `
	select 
		color_id,
		color_name,
		color_created_at,
		color_updated_at,
		color_deleted_at
	from colors
	where color_deleted_at is null and color_id = $1::int
`;


const POST = `
	insert into colors (color_name) values ($1::varchar)
	returning *
`

const PUT = `
	update colors set
		color_name = (
				case
					when length($2) > 0 then $2::varchar
					else color_name
				end
		),
		color_updated_at = now()
	where color_deleted_at is null and color_id = $1::int
	returning *
`

const DELETE = `
	update colors set
	color_deleted_at = now()
	where color_deleted_at is null and color_id = $1::int
	returning *
`

const checkColor = `
	select 
		color_id,
		color_name,
		color_created_at,
		color_updated_at,
		color_deleted_at
	from colors
	where color_deleted_at is null and color_name ILIKE $1::varchar
`


export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE,
	checkColor
}