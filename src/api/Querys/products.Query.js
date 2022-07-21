const GET = `
	select 
		p.product_id,
		p.product_name,
		p.product_brand_id,
		p.product_category_id,
		c.category_name,
		b.brand_name,
		p.product_price,
		p.product_images,
		p.product_colors,
		p.product_details,
		p.product_description,
		p.product_stock,
		p.product_created_at,
		p.product_updated_at,
		p.product_deleted_at,
		p.product_status_new,
		p.product_status_sale
	from products p
	join brands b on p.product_brand_id = b.brand_id 
	join categories c on p.product_category_id = c.category_id
	where product_deleted_at is null
`;


const GET_ONE = `
	select 
		p.product_id,
		p.product_name,
		p.product_brand_id,
		p.product_category_id,
		c.category_name,
		b.brand_name,
		p.product_price,
		p.product_images,
		p.product_colors,
		p.product_details,
		p.product_description,
		p.product_stock,
		p.product_created_at,
		p.product_updated_at,
		p.product_deleted_at,
		p.product_status_new,
		p.product_status_sale
	from products p
	join brands b on p.product_brand_id = b.brand_id 
	join categories c on p.product_category_id = c.category_id
	where product_deleted_at is null and product_id = $1::int
`;

const POST = `
	insert into products (product_name, product_category_id, product_brand_id, product_price, product_images, product_colors, product_details, product_description, product_stock) values 
	($1::varchar, $2::int, $3::int, $4::int, $5::json, $6::json, $7::json, $8::varchar, $9::int) 
	returning *
`

const PUT = `
	update products set
		product_name = (
			case
				when $2::varchar is not null then $2::varchar
				else product_name
			end
		),
		product_category_id = (
			case
				when $3::int is not null then $3::int
				else product_category_id
			end
		),
		product_brand_id = (
			case
				when $4::int is not null then $4::int
				else product_brand_id
			end
		),
		product_price = (
			case
				when $5::int is not null then $5::int
				else product_price
			end
		),
		product_images = (
			case
				when $6::json is not null then $6::json
				else product_images
			end
		),
		product_colors = (
			case
				when $7::json is not null then $7::json
				else product_colors
			end
		),
		product_details = (
			case
				when $8::json is not null then $8::json
				else product_details
			end
		),
		product_description = (
			case
				when $9::varchar is not null then $9::varchar
				else product_description
			end
		),
		product_stock = (
			case
				when $10::int is not null then $10::int
				else product_stock
			end
		),
		product_status_new = (
			case
				when $11::int is not null then $11::int
				else product_status_new
			end
		),
		product_status_sale = (
			case
				when $12::int is not null then $12::int
				else product_status_sale
			end
		),
		product_updated_at = now()
	where product_deleted_at is null and product_id = $1::int
	returning *;
`

const DELETE = `
	update products set
		product_deleted_at = now()
	where product_deleted_at is null and product_id = $1::int
	returning *;
`

const CHECK_BRAND = `
	select 
		* 
	from brands 
	where brand_id = $1::int and brand_deleted_at is null
`

const CHECK_CATEGORY = `
	select
	 	*
	from categories
	where category_id = $1::int and category_deleted_at is null
`

const CHECK_PRODUCT = `
	select
		*
	from products
	where product_id = $1::int and product_deleted_at is null
`

export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE,
	CHECK_BRAND,
	CHECK_CATEGORY,
	CHECK_PRODUCT
}