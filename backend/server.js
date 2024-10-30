import express from "express";
import cors from "cors";
import "dotenv/config";
import dbConnect from "./config/mongoose.js";
import productRouter from "./routes/productRoutes.js"
import { errorHandler } from "./middleWeres/errorHandler.js";
import path from "path";
import { fileURLToPath } from "url";

/* C0NFIGURATOIN */
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json()); // Parse JSON requests
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve static files from the uploads directory

/* ROUTES */
app.use('/api/products', productRouter) // to handle all the products requests

/* ERROR HANDLING MIDDLEWARE */
app.use(errorHandler)

/* SETTING UP MONGOOSE CONNECITON TO DB */
dbConnect();

/* SERVER PORT SETUP*/
const port = process.env.PORT || 6003;
app.listen(port, () => console.log("server is running on port " + port));
