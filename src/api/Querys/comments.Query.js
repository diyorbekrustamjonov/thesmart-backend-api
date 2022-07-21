const GET = `
	select 
		c.comment_id,
		u.user_id,
		u.user_phone,
		p.product_name,
		p.product_price,
		c.comment_user_id,
		c.comment_product_id,
		c.comment_status,
		c.comment_content,
		c.comment_stars,
		c.comment_created_at,
		c.comment_updated_at,
		c.comment_deleted_at
	from comments c
	join products p on c.comment_product_id = p.product_id 
	join users u on c.comment_user_id = u.user_id
	where comment_deleted_at is null;
`;

const GET_ONE = `
	select 
		c.comment_id,
		u.user_id,
		u.user_phone,
		p.product_name,
		p.product_price,
		c.comment_user_id,
		c.comment_product_id,
		c.comment_status,
		c.comment_content,
		c.comment_stars,
		c.comment_created_at,
		c.comment_updated_at,
		c.comment_deleted_at
	from comments c
	join products p on c.comment_product_id = p.product_id 
	join users u on c.comment_user_id = u.user_id
	where comment_deleted_at is null and c.comment_id = $1::int;
`;

const POST = `
	insert into comments (comment_user_id, comment_product_id, comment_status, comment_content, comment_stars) values 
	($1::int, $2::int, $3::varchar, $4::varchar, $5::int)
	returning *;
`

const PUT = `
	update comments set
	comment_user_id = (
			case
				when $1::int is not null then $1::int
				else comment_user_id
			end
		),
		comment_product_id = (
			case
				when $2::int is not null then $2::int
				else comment_product_id
			end
		),
		comment_status = (
			case
				when $3::varchar is not null then $3::varchar
				else comment_status
			end
		),
		comment_content = (
			case
				when $4::varchar is not null then $4::varchar
				else comment_content
			end
		),
		comment_stars = (
			case
				when $5::int is not null then $5::int
				else comment_stars
			end
		),
		comment_updated_at = now()
	where comment_deleted_at is null and comment_id = $6::int
	returning *;
`

const DELETE = `
	update comments set
		comment_deleted_at = now()
	where comment_deleted_at is null and comment_id = $1::int
	returning *;
`

const checkProduct = `
	select
		*
	from products
	where product_id = $1::int and product_deleted_at is null;
`

const checkUser = `
	select
		*
	from users
	where user_id = $1::int and user_deleted_at is null;
`

export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE,
	checkProduct,
	checkUser
}