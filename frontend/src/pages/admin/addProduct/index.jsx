import React, { useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const AddProductForm = ({ onClose }) => {
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
  const [message, setMessage] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData({
      ...productData,
      [name]: type === "checkbox" ? checked : value,
    });

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

      // add images to the formData
      if (selectedFiles) {
        for (let i = 0; i < selectedFiles.length; i++) {
          formData.append("images", selectedFiles[i]);
        }
      }
      const response = await axios.post(`${apiUrl}/api/products/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage({ status: "text-success", text: "product added successfuly" });
    } catch (error) {
      setMessage({
        status: "text-danger",
        text: error?.response?.data?.message,
      });
    }
  };

  return (
    <>
      <div className="container bg-light p-4 rounded-3 col-11">
        <h1>create</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-md-8">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-3">
              <input
                type="number"
                name="price"
                placeholder="Price"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="description"
                placeholder="Description"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <select
                name="category"
                onChange={handleChange}
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Pants & Trousers">Pants & Trousers</option>
                <option value="Top">Top</option>
                <option value="shirt & T-Shirt">Shirt & T-Shirt</option>
                <option value="Cosmetics & Skincare">
                  Cosmetics & Skincare
                </option>
                <option value="Churidaar">Churidaar</option>
                <option value="Jeans">Jeans</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                name="stock"
                placeholder="Stock"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="file"
                name="images"
                multiple
                onChange={handleFileChange}
                required
              />
            </div>

            {selectedFiles && (
              <div className="image-previews">
                {Array.from(selectedFiles).map((file, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt="Preview"
                    style={{ width: "200px", height: "auto", margin: "5px" }}
                  />
                ))}
              </div>
            )}
            <label>
              Is Featured:
              <input
                type="checkbox"
                name="isFeatured"
                onChange={handleChange}
              />
            </label>
            <button className="btn btn-primary" type="submit">
              Add Product
            </button>

            <button onClick={onClose} className="btn btn-danger">
              close
            </button>
            {message && <p className={`${message.status}`}>{message.text}</p>}
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProductForm;
