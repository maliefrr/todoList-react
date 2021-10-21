import express from "express";
import { getAllList, createList, getProductById, updateList, deleteList } from "../controller/listController.js";

// initial router
const router = express.Router();

router.get("/", getAllList);
router.get("/:id", getProductById);
router.post("/", createList);
router.patch("/:id", updateList);
router.delete("/:id", deleteList);

export default router;
