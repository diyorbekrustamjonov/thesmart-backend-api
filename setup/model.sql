-- Initialization (just copy and paste)

-- connect to another database 
\c postgres;

-- drop database if exists 
drop database if exists thesmart;

-- create database 
create database thesmart;

-- connect to databse look
\c thesmart;

-------------------------------------------------------------------------------------------
-- E-commerce app model

-- users table 
drop table if exists users cascade;
create table users(
	user_id int generated always as identity primary key,
	user_telegram_id varchar(50),
	user_first_name varchar(50) not null,
	user_last_name varchar(50),
	user_phone varchar(50) not null,
    user_password character varying(255) not null,
	user_role varchar(50) default 'user',
    user_created_at timestamp default current_timestamp,
	user_updated_at timestamp null,
    user_deleted_at timestamp null
);


-- categories table for products
drop table if exists categories cascade;
create table categories(
	category_id int generated always as identity primary key,
	category_name varchar(50) not null,
	category_created_at timestamp default current_timestamp,
	category_updated_at timestamp null,
	category_deleted_at timestamp null
);

-- colors table for products
drop table if exists colors cascade;
create table colors(
	color_id int generated always as identity primary key,
	color_name varchar(50) not null,
	color_created_at timestamp default current_timestamp,
	color_updated_at timestamp null,
	color_deleted_at timestamp null
);


-- brands table for products
drop table if exists brands cascade;
create table brands(
	brand_id int generated always as identity primary key,
	brand_name varchar(50) not null,
	brand_created_at timestamp default current_timestamp,
	brand_updated_at timestamp null,
	brand_deleted_at timestamp null
);

-- products table
drop table if exists products cascade;
create table products(
	product_id int generated always as identity primary key,
	product_name varchar(50) not null,
	product_category_id int references categories(category_id),
	product_brand_id int references brands(brand_id),
	product_price int not null,
	product_images json not null,
	product_colors json,
	product_details json not null,
	product_description text,
	product_stock int default 0,
	product_status_new int default 0,
	product_status_sale int default 0,
	product_created_at timestamp default current_timestamp,
	product_updated_at timestamp null,
	product_deleted_at timestamp null
);

-- orders table
drop table if exists orders cascade;
create table orders(
	order_id int generated always as identity primary key,
	order_user_id int references users(user_id),
	order_product_id int references products(product_id),
	order_quantity int not null,
	order_status varchar(50) default 'pending',
	order_address varchar(50) not null,
	order_created_at timestamp default current_timestamp,
	order_updated_at timestamp null,
	order_deleted_at timestamp null
);

-- orders table
drop table if exists carts cascade;
create table carts(
	cart_id int generated always as identity primary key,
	cart_user_id int references users(user_id),
	cart_product_id int references products(product_id),
	cart_quantity int not null,
	cart_created_at timestamp default current_timestamp,
	cart_updated_at timestamp null,
	cart_deleted_at timestamp null
);

-- orders table
drop table if exists comments cascade;
create table comments(
	comment_id int generated always as identity primary key,
	comment_user_id int references users(user_id),
	comment_product_id int references products(product_id),
	comment_status varchar(50) default 'pending',
	comment_content varchar(255) not null,
	comment_stars int default 5,
	comment_created_at timestamp default current_timestamp,
	comment_updated_at timestamp null,
	comment_deleted_at timestamp null
);
