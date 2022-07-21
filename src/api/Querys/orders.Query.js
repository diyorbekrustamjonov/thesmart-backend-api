const GET = `
	select 
		o.order_id,
		u.user_id,
		u.user_phone,
		p.product_name,
		p.product_price,
		o.order_quantity,
		o.order_status,
		o.order_address,
		o.order_created_at,
		o.order_deleted_at,
		o.order_updated_at
	from orders o
	join products p on o.order_product_id = p.product_id 
	join users u on o.order_user_id = u.user_id
	where order_deleted_at is null;
`;

const GET_ONE = `
	select 
		o.order_id,
		u.user_id,
		u.user_phone,
		p.product_name,
		p.product_price,
		o.order_quantity,
		o.order_status,
		o.order_address,
		o.order_created_at,
		o.order_deleted_at,
		o.order_updated_at
	from orders o
	join products p on o.order_product_id = p.product_id 
	join users u on o.order_user_id = u.user_id
	where order_deleted_at is null and o.order_id = $1::int;
`;

const POST = `
	insert into orders (order_user_id, order_product_id, order_quantity, order_address) values 
	($1::int, $2::int, $3::int, $4::varchar) 
	returning *;
`

const PUT = `
	update orders set
		order_user_id = (
			case
				when $1::int is not null then $1::int
				else order_user_id
			end
		),
		order_product_id = (
			case
				when $2::int is not null then $2::int
				else order_product_id
			end
		),
		order_quantity = (
			case
				when $3::int is not null then $3::int
				else order_quantity
			end
		),
		order_status = (
			case
				when $4::varchar is not null then $4::varchar
				else order_status
			end
		),
		order_address = (
			case
				when $5::varchar is not null then $5::varchar
				else order_address
			end
		),
		order_updated_at = now()
	where order_deleted_at is null and order_id = $6::int
	returning *;
`

const DELETE = `
	update orders set
		order_deleted_at = now()
	where order_deleted_at is null and order_id = $1::int
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