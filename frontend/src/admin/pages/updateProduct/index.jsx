import React, { useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const AddProductForm = ({ onClose, product }) => {
  const [productData, setProductData] = useState({
    ...product,
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
      console.log("form sented sucess :", productData)
      const response = await axios.put(`${apiUrl}/api/products/`, formData, {
        header: {
          "Content-Type": "multipart/form-data",
        },
      });
      setErrorMessage("");
      console.log(response.data); //handle the response
      console.log("file Upload success");
    } catch (error) {
      console.log(response);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container bg-light p-4 rounded-3">
        <h1>update product</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
            value={productData.name}
          />
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            value={productData.description}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            value={productData.price}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
            value={productData.category}
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            onChange={handleChange}
            value={productData.brand}
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            onChange={handleChange}
            value={productData.stock}
          />
          <input type="file" multiple onChange={handleFileChange} />
          {selectedFiles ? (
            <>
              {Array.from(selectedFiles).map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt="New Preview"
                  style={{ width: "100px", height: "auto", margin: "5px" }}
                />
              ))}
            </>
          ) : (
            <>
              <img
                style={{ width: "100px", height: "auto" }}
                src={apiUrl + product.images[0].url}
                alt="product image "
              />
            </>
          )}

          <label>
            Is Featured:
            <input
              type="checkbox"
              name="isFeatured"
              checked={productData.isFeatured || false}
              onChange={handleChange}
            />
          </label>
          <button className="btn btn-primary" type="submit">
            update Product
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
