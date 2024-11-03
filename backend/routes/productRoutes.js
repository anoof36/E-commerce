import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import * as product from "../controllers/productControllers.js"

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// to fetch all the products  from the database
router.get("/", product.getItems);

// Backend route to handle deleting a product by ID
router.delete("/:id", product.deleteItem);

// Route for adding a new product, handling file uploads conditionally
router.post("/", product.addItem);

// Route for updating product by ID
router.put("/", product.updateItem);

export default router;
