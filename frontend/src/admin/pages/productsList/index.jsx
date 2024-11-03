import React, { useEffect, useState } from "react";
import axios from "axios";
import AddProductForm from "../addProduct";
import UpdateProduct from "../updateProduct";

const apiUrl = import.meta.env.VITE_API_URL;

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showUpdatePage, setShowUpdatePage] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState({})

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
      console.log("Deleting product with ID:", productId);
      await axios.delete(`${apiUrl}/api/products/${productId}`);
      // Update state to remove deleted product from the list
      setProducts(products.filter((product) => product._id !== productId));
      console.log("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleUpdatePage = (product) => {
    setProductToUpdate(product);
    setShowUpdatePage(prev => !prev)
  };


    //method 1
  const toggleAddProduct = () => {
    fetchData();
    setShowAddProduct(!showAddProduct); // Toggle the visibility of AddProduct
  };
  
  //method 2
  const closeToggle = (close) => {
    fetchData()
    close(prev => !prev)
  } 

  return (
    <div className="w-100 vh-100 m-0 p-3">
      <h1>products List</h1>
      <div className="w-100 d-flex justify-content-end p-2">
        <button className="btn btn-success" onClick={toggleAddProduct}>
          create
        </button>
      </div>
      {/* Conditionally render AddProduct component */}
      {showAddProduct && (
        <div className="position-absolute z-3 top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center">
          <AddProductForm onClose={() => closeToggle(setShowAddProduct)} />
        </div>
      )}
      {showUpdatePage && (
        <div className="position-absolute z-3 top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center">
          <UpdateProduct onClose={() => closeToggle(setShowUpdatePage)} product={productToUpdate} />
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
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">{product.category}</p>
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
