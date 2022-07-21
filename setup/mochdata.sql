-- insert to users
insert into users(user_telegram_id, user_first_name, user_last_name, user_password, user_role, user_phone) values 
('612120112', 'Diyorbek', 'Rustamjonov', '21232f297a57a5a743894a0e4a801fc3', 'admin', '998992312433');

-- insert to categories
insert into categories(category_name) values
('Phones'),
('Notebooks');

-- insert to brands
insert into brands(brand_name) values 
('Apple'),
('Samsung'),
('HyperPC'),
('Ryzer');

-- insert to colors
insert into colors(color_name) values
('White'),
('Black'),
('Red'),
('Silver'),
('Green');

-- insert to products
insert into products(product_name, product_category_id, product_brand_id, product_price, product_images, product_colors, product_details, product_description, product_stock, product_status_new, product_status_sale) values 
('iPhone 13 Pro Max', 1, 1, 1200, '["1652734455138-iphone.jpg", "1652734455433-iphone.jpg", "1652734455885-iphone.jpg"]', '["black", "white", "silver"]', '{"RAM": "4", "Storage":"1tb", "SIM": "2"}', 'This is best phone in the year', 10, 1, 1),
('Samsung S22 Ultra', 1, 2, 1000, '["samsung-s22-ultra-1.jpg", "samsung-s22-ultra-2.jpg", "samsung-s22-ultra-3.jpg"]', '["black", "white", "silver"]', '{"RAM": "12", "Storage":"1tb", "SIM": "2"}', 'This is best phone in the year 2022', 2, 0, 1),
('Macbook Pro 13 M1', 2, 1, 1200, '["macbook-pro-m1-13-1.jpeg", "macbook-pro-m1-13-2.jpeg", "macbook-pro-m1-13-3.jpeg"]', '["black", "white", "silver"]', '{"RAM": "8", "Storage":"256GB", "CPU": "M1"}', 'This is best Noutbook in the year', 5, 1, 0);

-- insert to orders
insert into orders(order_user_id, order_product_id, order_quantity, order_status, order_address) values 
(1, 1, 1, 'pending', 'Chilonzor 9 kvartal');

-- insert to comments
insert into comments(comment_user_id, comment_product_id, comment_content) values 
(1, 1, 'Yaxshi mahsulot ekan!');

-- insert to carts
insert into carts(cart_user_id, cart_product_id, cart_quantity) values 
(1, 1, 1);