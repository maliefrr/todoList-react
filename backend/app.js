import express from "express";
import router from "./routes/router.js";
import db from "./config/db.js";

// express gateaway
const app = express();

// defining port
const PORT = process.env.PORT || 5000;

// database connection
try {
	await db.authenticate();
	console.log("Database Connected...");
} catch (error) {
	console.error("Connection Failed", error);
}

// middleware
app.use(express.json());

// load route
app.use(router);

// running the server
app.listen(PORT, () => {
	console.log(`server running at http://localhost:${PORT}`);
});
