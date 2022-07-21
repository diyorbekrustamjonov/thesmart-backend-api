import express from "express";

import checkTokenMiddleware from "#middlewares/checkToken.Middleware";
import controller from "#controllers/brands.Controller";

const router = express.Router();

router.get("/brands", controller.GET);
router.get("/brands/:brand_id", controller.GET_ONE);

router.post("/brands", checkTokenMiddleware, controller.POST);
router.put("/brands",  checkTokenMiddleware, controller.PUT);
router.delete("/brands", checkTokenMiddleware, controller.DELETE);

export default router;