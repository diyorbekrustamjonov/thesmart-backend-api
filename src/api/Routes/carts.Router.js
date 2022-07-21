import express from "express";

import checkTokenMiddleware from "#middlewares/checkToken.Middleware";
import controller from "#controllers/carts.Controller";

const router = express.Router();

router.get("/carts/:cart_id", checkTokenMiddleware, controller.GET_ONE);
router.get("/carts", checkTokenMiddleware, controller.GET);

router.post("/carts", checkTokenMiddleware, controller.POST);
router.put("/carts", checkTokenMiddleware, controller.PUT);
router.delete("/carts", checkTokenMiddleware, controller.DELETE);

export default router;