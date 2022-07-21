const GET = `
	select 
		brand_id,
		brand_name,
		brand_created_at,
		brand_updated_at,
		brand_deleted_at
	from brands
	where brand_deleted_at is null  
`;

const GET_ONE = `
	select 
		brand_id,
		brand_name,
		brand_created_at,
		brand_updated_at,
		brand_deleted_at
	from brands
	where brand_id = $1::int and brand_deleted_at is null 
`;

const POST = `
	insert into brands (brand_name) values 
	($1::varchar)
	returning *
`

const PUT = `
	update brands set
	brand_name = (
		case
			when length($2) > 0 then $2::varchar
			else brand_name
		end
	),
	brand_updated_at = now()
	where brand_deleted_at is null and brand_id = $1::int
	returning *
`

const DELETE = `
	update brands set
	brand_deleted_at = now()
	where brand_deleted_at is null and brand_id = $1::int
	returning *
`

const checkBrand = `
	select 
		brand_id,
		brand_name,
		brand_created_at,
		brand_updated_at,
		brand_deleted_at
	from brands	
	where brand_name ILIKE $1::varchar and brand_deleted_at is null
`

export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE,
	checkBrand
}