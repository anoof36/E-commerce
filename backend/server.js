import express from "express";
import cors from "cors";
import "dotenv/config";
import dbConnect from "./config/mongoose.js";
import multer from "multer";
import Product from "./model/products.js";

/* C0NFIGURATOIN */
const app = express();

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
    console.log(products)
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error retrieving products", error: error.message });
  }
});

// Backend route to handle deleting a product by ID
app.delete("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
});

// Route for adding a new product
app.post("/add-product", upload.array("images", 5), 
async (req, res) => {
  try {
    const { name, description, price, category, brand, stock, isFeatured } =
      req.body;

    const images = req.files.map((file) => ({
      url: `/uploads/images/${file.filename}`,
      altText: file.originalname,
    }));

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
    console.log("product added succesfully: ");
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* SETTING UP MONGOOSE CONNECITON TO DB */
dbConnect();

/* SERVER PORT SETUP*/
const port = process.env.PORT || 6003;
app.listen(port, () => console.log("server is running on port " + port));
