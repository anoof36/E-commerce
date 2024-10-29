import express from "express";
import cors from "cors";
import "dotenv/config";
import dbConnect from "./config/mongoose.js";
import multer from "multer";
import Product from "./model/products.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

/* C0NFIGURATOIN */
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the uploads directory only if authenticated
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Enable CORS for all routes
app.use(
  cors({
    origin: "*", // This means only requests from this origin are allowed
  })
);

/* CEATING IMAGE STORAGE WITH MULTER LIBRARY */
const storage = multer.diskStorage({
  destination: "uploads/images",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

/* ROUTES */
app.get("/", (req, res) => {
  res.send(req.header.origin); // Use send() to send the response
});

app.get("/product-list", async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find(); // `.find()` without arguments fetches all records

    // Send the products as a JSON response
    products.forEach((product) => console.log(product));
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res
      .status(500)
      .json({ message: "Error retrieving products", error: error.message });
  }
});

// Backend route to handle deleting a product by ID
app.delete("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    // Find the product to get the image path
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete the image from the filesystem
    const imagePath = path.join(__dirname, product.images[0].url); // Adjust based on how you're storing URLs
    fs.unlink(imagePath, () => console.log("delete success"));

    // Delete the product from the database
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error.message);

    res.status(500).json({ message: "Error deleting product", error });
  }
});


// Route for adding a new product, handling file uploads conditionally
app.post("/add-product", async (req, res, next) => {
  // Only call the upload middleware if there are files to upload
  const uploadMiddleware = upload.array("images", 5);

  uploadMiddleware(req, res, async (err) => {
    if (err || req.files.length == 0) {
      // Handle any errors from the upload middleware
      return res.status(500).json({ message:`file upload failed ${err.message}`, error: err.message });
    }

    try {
      const { name, description, price, category, brand, stock, isFeatured } = req.body;
      console.log("Form data:", req.body); // Logs your text fields
      console.log("File data:", req.files); // Logs the array of uploaded files, if any

      // Map images only if files are provided
      const images = req.files ? req.files.map((file) => ({
        url: `/uploads/images/${file.filename}`,
        altText: file.originalname,
      })) : [];

      const product = new Product({
        name,
        description,
        price,
        category,
        brand,
        stock,
        isFeatured: isFeatured === "true",
        images,
      });

      await product.save();
      res.status(201).json({ message: "Product added successfully", product });
    } catch (error) {
      res.status(500).json({ message:`product adding faild ${ error.message, error}`,error: error.message });
    }
  });
});

/* SETTING UP MONGOOSE CONNECITON TO DB */
dbConnect();

/* SERVER PORT SETUP*/
const port = process.env.PORT || 6003;
app.listen(port, () => console.log("server is running on port " + port));
