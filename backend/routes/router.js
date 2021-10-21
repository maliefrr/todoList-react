import express from "express";
import { getAllList, createList } from "../controller/listController.js";

// initial router
const router = express.Router();

router.get("/", getAllList);
router.post("/", createList);

export default router;
