import express from "express"

import authRouter from "#routes/auth.Router"
import usersRouter from "#routes/users.Router"
import categoriesRouter from "#routes/categories.Router"
import brandsRouter from "#routes/brands.Router"
import productsRouter from "#routes/products.Router"
import ordersRouter from "#routes/orders.Router"
import commentsRouter from "#routes/comments.Router"
import cartsRouter from "#routes/carts.Router"
import colorsRouter from "#routes/colors.Router"




const router = express.Router()

router.use(authRouter)
router.use(usersRouter)
router.use(categoriesRouter)
router.use(brandsRouter)
router.use(productsRouter)
router.use(ordersRouter)
router.use(commentsRouter)
router.use(cartsRouter)
router.use(colorsRouter)

export default router