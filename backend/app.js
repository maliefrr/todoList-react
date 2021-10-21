import express from "express";
import router from "./routes/router.js";
import db from "./config/db.js";
import cors from "cors";

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
app.use(cors());

// load route
app.use(router);

// running the server
app.listen(PORT, () => {
	console.log(`server running at http://localhost:${PORT}`);
});
