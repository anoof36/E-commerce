import Product from "../model/products.js";
import upload from "../config/multer.js";
import { reqValidation } from "../middleWeres/validation.js";
import { deleteFile } from "../utils/fileHandlers.js";

// FOR UPDATING PRODUCT -----------------------------------------------------
export const updateItem = async(req, res, next) => {
  try{
    
      console.log(req.file)
  }
  catch(err) {
    res.status(500).json({
      message: "server error",
      error: err
    })
  }
};

// FOR ADDING A PRODUCT-------------------------------------------------------
export const addItem = async (req, res, next) => {
  // Only call the upload middleware if there are files to upload
  const uploadMiddleware = upload.array("images", 5);

  uploadMiddleware(req, res, async (err) => {
    if (err || req.files.length == 0) {
      // Handle any errors from the upload middleware
      const errorMessage = err?.message || "image not found";
      return res.status(500).json({ message: errorMessage });
    }

    try {
      console.log(req.body)
      const { name, description, price, category, brand, stock, isFeatured } =
        req.body;

      // Map images only if files are provided
      const images = req.files
        ? req.files.map((file) => ({
            url: `/uploads/images/${file.filename}`,
            altText: file.originalname,
          }))
        : [];

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
      res.status(500).json({
        message: `product adding faild ${(error.message, error)}`,
        error: error.message,
      });
    }
  });
};

// FOR FETCHING ALL THE PRODUCT DEATIALS -------------------------------------------------------------
export const getItems = async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find(); // `.find()` without arguments fetches all records

    // Send the products as a JSON response
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res
      .status(500)
      .json({ message: "Error retrieving products", error: error.message });
  }
};

// FOR DELETING ONE PRODUCT ------------------------------------------------
export const deleteItem = async (req, res) => {
  try {
    const productId = req.params.id;

    // Find the product to get the image path
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete the image from the filesystem
    deleteFile(product.images[0].url);

    // Delete the product from the database
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Error deleting product", error });
  }
};
