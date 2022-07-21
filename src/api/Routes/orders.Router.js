import express from "express";

import checkTokenMiddleware from "#middlewares/checkToken.Middleware";
import controller from "#controllers/orders.Controller";

const router = express.Router();

router.get("/orders", checkTokenMiddleware, controller.GET);
router.get("/orders/:order_id", checkTokenMiddleware, controller.GET_ONE);

router.post("/orders", checkTokenMiddleware, controller.POST);
router.put("/orders", checkTokenMiddleware, controller.PUT);
router.delete("/orders", checkTokenMiddleware, controller.DELETE);
// router.delete("/orders", checkTokenMiddleware, controller.DELETE);

export default router;