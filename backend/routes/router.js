import express from "express";
import { getAllList } from "../controller/listController.js";

// initial router
const router = express.Router();

router.get("/", getAllList);

export default router;
