import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} from "../controllers/productControllers.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// to fetch all the products  from the database
router.get("/", getProducts);

// Backend route to handle deleting a product by ID
router.delete("/:id", deleteProduct);

// Route for adding a new product, handling file uploads conditionally
router.post("/", addProduct);

// Route for updating product by ID
router.patch("/:id", updateProduct);

export default router;
