import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    maxlength: [100, "Product name cannot exceed 100 characters"],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, "Description cannot exceed 500 characters"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    enum: ["Electronics", "Clothing", "Furniture", "Toys", "Books", "Other"],
  },
  brand: {
    type: String,
    trim: true,
  },
  stock: {
    type: Number,
    required: true,
    min: [0, "Stock cannot be negative"],
    default: 0,
  },
  images: [
    {
      url: {
        type: String,
        required: true,
      },
      altText: String,
    },
  ],
  ratings: {
    average: {
      type: Number,
      min: [0, "Rating cannot be less than 0"],
      max: [5, "Rating cannot be more than 5"],
      default: 0,
    },
    reviews: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: {
          type: Number,
          min: 0,
          max: 5,
        },
        comment: String,
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update `updatedAt` on save
productSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
