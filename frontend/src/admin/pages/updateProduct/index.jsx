import React, { useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const AddProductForm = ({ onClose, product }) => {
  const [productData, setProductData] = useState({
    ...product,
  });

  const [selectedFiles, setSelectedFiles] = useState();
  const [message, setMessage] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProductData({
      ...productData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear the message on any change
  setMessage({ status: "", text: "" });
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
      formData.append("prevImage", product.images[0].url);
      formData.append("_id", productData._id);

      // add images to the formData
      if (selectedFiles) {
        for (let i = 0; i < selectedFiles.length; i++) {
          formData.append("images", selectedFiles[i]);
        }
      }

      const response = await axios.put(
        `${apiUrl}/api/products/update`,
        formData,
        {
          header: {
            "Content-Type": "multiple/form-data",
          },
        }
      );
      setMessage({ status: "text-success", text: response?.data.message });
    } catch (error) {
      setMessage({ status: "text-danger", text: error?.response?.data.message });
      
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
            required
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
            required
          />
           <select
            name="category"
            onChange={handleChange}
            required 
            defaultValue=""
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Furniture">Furniture</option>
            <option value="Toys">Toys</option>
            <option value="Books">Books</option>
            <option value="Other">Other</option>  
          </select>
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            onChange={handleChange}
            value={productData.brand}
            required
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            onChange={handleChange}
            value={productData.stock}
            required
          />
          <input
            type="file"
            name="images"
            multiple
            onChange={handleFileChange}
            required
          />
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

          <button
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
            className="btn btn-danger"
          >
            close
          </button>
          {message && <p className={`${message.status}`}>{message.text}</p>}
        </form>
      </div>
    </>
  );
};

export default AddProductForm;
