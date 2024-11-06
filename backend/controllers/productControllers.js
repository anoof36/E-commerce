import Product from "../model/products.js";
import upload from "../config/multer.js";
import { reqValidation } from "../middleWeres/validation.js";
import { deleteFile } from "../utils/fileHandlers.js";

// FOR UPDATING PRODUCT -----------------------------------------------------
export const updateItem = async (req, res, next) => {
  // Only call the upload middleware if there are files to upload
  const uploadMiddleware = upload.array("images", 5);

  uploadMiddleware(req, res, async (err) => {
    const updatedProduct = req.body;

    if (err) {
      // Handle any errors from the upload middleware
      const errorMessage = err?.message || "image not found";
      return res.status(400).json({ message: errorMessage });
    }

    // Delete previous image if new files are uploaded
    if (req.files.length !== 0) {
      // delete previous image from the storagec
      console.log("updatedProduct.prevImage", updatedProduct.prevImage)
      deleteFile(updatedProduct.prevImage, (err) => {
        if (err) {
          console.error("Error deleting previous image:", err);
        } else {
          console.log("Previous image delete successful");
        }
      });

      // Update the image paths in the product if new images were uploaded
      const newImagePaths = req.files.map((file) => ({
        url: file.path,
        altText: file.originalname, // or any other alt text you want
      }));
      updatedProduct.images = newImagePaths;

      console.log("updatedProduct.images", updatedProduct);
    }

    try {
      console.log("updatedProduct", updatedProduct)
      // Find the product by ID and update it with new data
      const updated = await Product.findByIdAndUpdate(
        updatedProduct._id,
        updatedProduct,
        { new: true } // Return the updated document
      );

      if (!updated) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json({
        message: "Product updated successfully",
        product: updated,
      });
    } catch (err) {
      res.status(500).json({
        message: `product adding faild ${(err.message, err)}`,
        error: err.message,
      });
    }
  });
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
