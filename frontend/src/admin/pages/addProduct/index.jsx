import React, { useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const AddProductForm = ({ onClose }) => {
  //fake product data_______________________________________________________
  const fakeProduct = {
    name: "track pant",
    description: "surplus",
    price: 550,
    category: "Clothing",
    brand: "zara",
    stock: 12,
  };

  const [productData, setProductData] = useState({
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
  const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      
      setProductData({
        ...productData,
        [name]: type === "checkbox" ? checked : value,
      });
    };

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    try {
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
      const response = await axios.post(`${apiUrl}/api/products/`, formData, {
        header: {
          "Content-Type": "multiple/form-data",
        },
      });
      setErrorMessage("");
      console.log(response.data); //handle the response
      console.log("file Upload success");
    } catch (error) {
      console.log(response)
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container bg-light p-4 rounded-3">
        <h1>create</h1>
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
          <button className="btn btn-primary" type="submit">
            Add Product
          </button>

          <button onClick={onClose} className="btn btn-danger">
            close
          </button>
          {errorMessage && <p className="text-danger py-4">{errorMessage}</p>}
        </form>
      </div>
    </>
  );
};

export default AddProductForm;
