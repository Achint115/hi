// HomePage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";  // Import Link for navigation
import "./homePage.css";
import ProductCard from "./productCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(response.data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  const filterProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };

  return (
    <div className="home-page">
      <h1>Product Listings</h1>

      {/* Render categories with links */}
      <div className="categories">
        {categories.map((category) => (
          <div key={category} className="category-section">
            <h2>
              <Link to={`/category/${category}`}>{category}</Link>
            </h2>
            <div className="products-list">
              {filterProductsByCategory(category).map((product) => (
               <Link key={product.id} to={`/product/${product.id}`}>
               <ProductCard product={product} />
             </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
