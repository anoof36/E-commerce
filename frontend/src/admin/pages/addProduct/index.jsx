import React, { useState } from "react";
import axios from "axios"

const AddProductForm = () => {
  console.log("Add product page called")
  const[productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    brand: "",
    stock: 0,
    image: [], // to handle multiple images
    isFeatured: false,
  });

  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData({
      ...productData,
      [name]: type === "checked" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("category", productData.category);
    formData.append("brand", productData.brand);
    formData.append("stock", productData.stock);
    formData.append("isFeatured", productData.isFeatured);

    // add images to the formData
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append("images", selectedFiles[i]);
      }
    }

    try {
      console.log("product data sented to backend")
      
      const response = await axios.post("http://localhost:8002/api/products", formData, {
        header: {
          "Content-Type": "multiple/form-data",
        },
      });
      console.log(response.data); //handle the response
      console.log("file Upload success")
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          onChange={handleChange}
        />
        <input type="file" multiple onChange={handleFileChange} />
        <label>
          Is Featured:
          <input type="checkbox" name="isFeatured" onChange={handleChange} />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </>
  );
};

export default AddProductForm;
