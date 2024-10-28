import React, { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/product-list`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleDelete = async (productId) => {
    try {
      console.log(productId)
      await axios.delete(`${apiUrl}/products/${productId}`);
      // Update state to remove deleted product from the list
      setProducts(products.filter((product) => product._id !== productId));
      console.log("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="w-100 vh-100 bg-info m-0 p-3">
      <h1 className="text-white">products List</h1>
      <div className="w-100 d-flex justify-content-end p-2">
        <button className="btn btn-success">
            create
        </button>
      </div>
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-md-4 mb-4">
            <p>{product._id}</p>
            <div className="card">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-primary">View Product</button>{" "}
                <button className="btn btn-danger" onClick={handleDelete}>delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
