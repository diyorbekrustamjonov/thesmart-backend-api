import express from "express";

import checkTokenMiddleware from "#middlewares/checkToken.Middleware";
import controller from "#controllers/products.Controller";

const router = express.Router();

router.get("/products", controller.GET);
router.get("/products/:product_id", controller.GET_ONE);
router.post("/products", checkTokenMiddleware, controller.POST);
router.put("/products", checkTokenMiddleware, controller.PUT);

router.delete("/products", checkTokenMiddleware, controller.DELETE);

export default router;