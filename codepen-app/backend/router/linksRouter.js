import express from "express";
import linksController from "../controller/linksController.js";

const router = express.Router();

router.post("/", linksController.create);

export default router