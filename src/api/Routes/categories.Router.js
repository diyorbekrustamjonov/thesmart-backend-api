import express from "express";

import checkTokenMiddleware from "#middlewares/checkToken.Middleware";
import controller from "#controllers/categories.Controller";

const router = express.Router();

router.get("/categories", controller.GET);
router.get("/categories/:category_id", controller.GET_ONE);

router.post("/categories", checkTokenMiddleware, controller.POST);
router.put("/categories", checkTokenMiddleware, controller.PUT);
router.delete("/categories", checkTokenMiddleware, controller.DELETE);

export default router;