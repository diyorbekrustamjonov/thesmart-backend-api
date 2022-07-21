import express from "express";

import checkTokenMiddleware from "#middlewares/checkToken.Middleware";
import controller from "#controllers/users.Controller";

const router = express.Router();

router.get("/users", checkTokenMiddleware, controller.GET);
router.get("/users/:user_id", checkTokenMiddleware, controller.GET_ONE);

router.post("/users", checkTokenMiddleware, controller.POST);
router.put("/users", checkTokenMiddleware, controller.PUT);
router.delete("/users", checkTokenMiddleware, controller.DELETE);

export default router;