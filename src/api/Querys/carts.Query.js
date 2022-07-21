const GET = `
	select 
		c.cart_id,
		u.user_id,
		u.user_phone,
		u.user_first_name,
		u.user_last_name,
		p.product_name,
		p.product_price,
		p.product_colors,
		p.product_images,
		p.product_details,
		p.product_description,
		p.product_stock,
		p.product_status_new,
		p.product_status_sale,
		c.cart_quantity,
		c.cart_created_at,
		c.cart_deleted_at,
		c.cart_updated_at
	from carts c
	join products p on c.cart_product_id = p.product_id 
	join users u on c.cart_user_id = u.user_id
	where cart_deleted_at is null;
`;


const GET_ONE = `
	select 
		c.cart_id,
		u.user_id,
		u.user_phone,
		u.user_first_name,
		u.user_last_name,
		p.product_name,
		p.product_price,
		p.product_colors,
		p.product_images,
		p.product_status_new,
		p.product_status_sale,
		c.cart_quantity,
		c.cart_created_at,
		c.cart_deleted_at,
		c.cart_updated_at
	from carts c
	join products p on c.cart_product_id = p.product_id 
	join users u on c.cart_user_id = u.user_id
	where cart_deleted_at is null and c.cart_id = $1::int;
`;


const POST = `
	insert into carts (cart_user_id, cart_product_id, cart_quantity) values 
	($1::int, $2::int, $3::int) 
	returning *;
`


const PUT = `
	update carts set
		cart_user_id = (
			case
				when $2::int is not null then $2::int
				else cart_user_id
			end
		),
		cart_product_id = (
			case
				when $3::int is not null then $3::int
				else cart_product_id
			end
		),
		cart_quantity = (
			case
				when $4::int is not null then $4::int
				else cart_quantity
			end
		),
		cart_updated_at = now()
	where cart_deleted_at is null and cart_id = $1::int
	returning *;
`


const DELETE = `
	update carts set
		cart_deleted_at = now()
	where cart_deleted_at is null and cart_id = $1::int
	returning *;
`

const checkUserId = `
	select
			*
	from carts
	where cart_deleted_at is null and cart_user_id = $1::int
`

const checkProductId = `
	select
			*
	from carts
	where cart_deleted_at is null and cart_product_id = $1::int
`

export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE,
	checkUserId,
	checkProductId
}