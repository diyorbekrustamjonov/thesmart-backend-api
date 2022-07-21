import express from "express";

import checkTokenMiddleware from "#middlewares/checkToken.Middleware";
import controller from "#controllers/colors.Controller";

const router = express.Router();

router.get("/colors", controller.GET);
router.get("/colors/:color_id", controller.GET_ONE);

router.post("/colors", checkTokenMiddleware, controller.POST);
router.put("/colors", checkTokenMiddleware, controller.PUT);
router.delete("/colors", checkTokenMiddleware, controller.DELETE);

export default router;