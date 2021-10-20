import express from "express";

// initial router
const router = express.Router();

router.get("/", (req, res) => {
	res.send("sucsess migrating to router");
});

export default router;
