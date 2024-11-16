import React, { useEffect, useState } from "react";
import axios from "axios";
import AddProductForm from "../addProduct";
import UpdateProduct from "../updateProduct";

const apiUrl = import.meta.env.VITE_API_URL;

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showUpdatePage, setShowUpdatePage] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/products/`);
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`${apiUrl}/api/products/${productId}`);
      // Update state to remove deleted product from the list
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {}
  };

  const handleUpdatePage = (product) => {
    setProductToUpdate(product);
    setShowUpdatePage((prev) => !prev);
  };

  // controling toggle
  const Toggle = (setter) => {
    fetchData();
    setter((prev) => !prev);
  };

  return (
    <div className="w-100 m-0 p-3">
      <h1>products List</h1>
      <div className="w-100 d-flex justify-content-end p-2">
        <button
          className="btn btn-success"
          onClick={() => Toggle(setShowAddProduct)}
        >
          create
        </button>
      </div>
      {/* Conditionally render AddProduct component */}
      {showAddProduct && (
        <div className="position-absolute z-3 top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center">
          <AddProductForm onClose={() => Toggle(setShowAddProduct)} />
        </div>
      )}
      {showUpdatePage && (
        <div className="position-absolute z-3 top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center">
          <UpdateProduct
            onClose={() => Toggle(setShowUpdatePage)}
            product={productToUpdate}
          />
        </div>
      )}{" "}
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-sm-6 col-md-4 mb-4">
            <div className="card">
              <img
                src={apiUrl + product.images[0].url}
                alt={product.name}
                className="card-img-top m-1"
                style={{
                  width: "80px",
                  height: "auto",
                  boxSizing: "border-box",
                }}
              />
              <div className="card-body">
                {Object.entries(product).map(
                  ([key, value]) =>
                    // Skip unwanted fields if necessary
                    key !== "_id" &&
                    key !== "images" &&
                    key !== "ratings" && (
                      <p className="card-text" key={key}>
                        <strong>
                          {key.charAt(0).toUpperCase() + key.slice(1)}:
                        </strong>{" "}
                        {value}
                      </p>
                    )
                )}
                <button
                  className="btn btn-primary m-1"
                  onClick={() => handleUpdatePage(product)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product._id)}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
