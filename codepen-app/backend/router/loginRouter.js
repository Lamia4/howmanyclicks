import express from "express";
import authenticateController from "../controller/authenticateController.js";

const router = express.Router();

router.post("/user", authenticateController.loginByEmail);

export default router;