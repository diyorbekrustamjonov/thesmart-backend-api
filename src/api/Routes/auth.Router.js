import express from "express";

import controller from "#controllers/auth.Controller";

const router = express.Router();

router.post("/auth/login", controller.LOGIN);
router.post("/auth/register", controller.REGISTER);

export default router;