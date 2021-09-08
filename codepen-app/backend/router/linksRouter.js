import express from "express";
import linksController from "../controller/linksController.js";
import hashController from "../controller/hashController.js";

const router = express.Router();

router.post("/", linksController.create);

router.get("/", linksController.readAll);

router.get("/:linkTitle", hashController.read);

export default router