const GET_ONE = `
	select 
		* 
	from products
	where product_id = $1::int and product_deleted_at is null;
`;
const checkProduct = `
	select
		*
	from products
	where product_id = $1::int and product_deleted_at is null;
`

export default {
	GET_ONE,
	checkProduct,
}