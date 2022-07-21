/* 
							////////////////////// AUTH //////////////////////////////
// LOGIN
POST: /api/login
	* user_role: admin
	{
		"user_phone": "998992312433",
		"user_password": "admin"
	}

    * user_role: user
	{
		"user_phone": "998932144244",
		"user_password": "sysadmin1234"
	}
	
// REGISTER
POST: /api/register
	{
		"user_first_name": "John", 			// optional
		"user_last_name": "Doe", 			// optional
		"user_phone": "998995852535",		// required
		"user_password": "sysadmin1234" 	// required
	}



							////////////////////// USERS //////////////////////////////
// GET ALL USERS
GET: /api/users


// CREATE NEW USER 
POST: /api/users
	{
		"user_first_name": "John", 			// optional
		"user_last_name": "Doe", 			// optional
		"user_phone": "998995852535",		// required
		"user_password": "sysadmin1234" 	// required
	}


// UPDATE USER
PUT: /api/users
	{
		"user_id": "1",
		"user_first_name": "John", 			// optional
		"user_last_name": "Doe", 			// optional
		"user_phone": "998995852535",		// required
		"user_password": "sysadmin1234"	 	// required
	}


// DELETE USER
DELETE: /api/users
	{
		"user_id": "1"
	}


	

							////////////////////// CATEGORIES //////////////////////////////
// GET ALL CATEGORIES
GET: /api/category

// CREATE NEW CATEGORY
POST: /api/category
	{
		"category_name": "Electronics" 		// required
	}


// UPDATE CATEGORY
PUT: /api/category
	{
		"category_id": "1",
		"category_name": "Electronics"		// required
	}

// DELETE CATEGORY
DELETE: /api/category
	{
		"category_id": "1"					// required
	}




							////////////////////// BRANDS //////////////////////////////
// GET ALL BRANDS
GET: /api/brands

// CREATE NEW BRANDS
POST: /api/brands
	{
		"brand_name": "Lenovo" 		// required
	}


// UPDATE BRANDS
PUT: /api/brands
	{
		"brand_id": "1",
		"brand_name": "Megafon"		// required
	}

// DELETE BRANDS
DELETE: /api/brands
	{
		"brand_id": "1"					// required
	}

							////////////////////// PRODUCTS //////////////////////////////

	{
			"product_name": "Macbook M1 Pro",
			"product_brand_id": 1,
			"product_category_id": 2,
			"product_price": 1200,
			"product_colors": '["White","Silver","Black"]',
			"product_details": '{"RAM":"4","Storage":"1tb","SIM":"2"}',
			"product_description": "The best of the best",
			"product_stock": 10
	}


*/