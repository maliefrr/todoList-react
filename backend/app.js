import express from "express";
import router from "./routes/router.js";

// express gateaway
const app = express();

// defining port
const PORT = process.env.PORT || 5000;

// load route
app.use(router);

// running the server
app.listen(PORT, () => {
	console.log(`server running at http://localhost:${PORT}`);
});
