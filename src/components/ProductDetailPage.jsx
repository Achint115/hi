// ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get the category from the URL
import axios from 'axios';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { productId } = useParams(); // Get the productId from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    };

    fetchProductDetails();
  }, [productId]); // Refetch the product details when the productId changes

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    // Handle add to cart logic
    alert('Product added to cart!');
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <span className="product-price">${product.price}</span>
          <div className="rating">
            <span>Rating: {product.rating.rate}</span> ({product.rating.count} reviews)
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
