import React, { useState } from 'react';

function AddProductPage() {
  // State variables for form fields
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [productImage, setProductImage] = useState(null);

  // Handle image file change
  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object for sending to backend
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('productImage', productImage);

    try {
      const response = await fetch('http://localhost:6003/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert('Product added successfully');
        // Reset form fields after successful submission
        setProductName('');
        setPrice('');
        setDescription('');
        setCategory('');
        setProductImage(null);
      } else {
        alert('Failed to add product: ' + result.message);
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };

  // JSX for rendering the form
  return (
    <div>
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductPage;
