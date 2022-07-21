import express from "express";

import checkTokenMiddleware from "#middlewares/checkToken.Middleware";
import controller from "#controllers/comments.Controller";

const router = express.Router();

router.get("/comments", controller.GET);
router.get("/comments/:comment_id", controller.GET_ONE);

router.post("/comments", checkTokenMiddleware, controller.POST);
router.put("/comments", checkTokenMiddleware, controller.PUT);
router.delete("/comments", checkTokenMiddleware, controller.DELETE);

export default router;