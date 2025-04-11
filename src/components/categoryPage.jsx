import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // To get the category name from the URL
import axios from "axios";
import ProductCard from "./productCard";

const CategoryPage = () => {
  const { categoryName } = useParams(); // Retrieve category name from URL
  const decodedCategoryName = decodeURIComponent(categoryName); // Decode the category name from the URL
  //console.log(decodedCategoryName);  // Check decoded category name

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const filteredProducts = response.data.filter(
          (product) => product.category.toLowerCase() === decodedCategoryName.toLowerCase()
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products by category", error);
      }
    };

    fetchCategoryProducts();
  }, [decodedCategoryName]); // Re-run when categoryName changes

  return (
    <div className="category-page">
      <h1>{decodedCategoryName} Products</h1>
      <div className="products-list">
        {products.length > 0 ? (
          products.map((product) => (
            
            <Link key={product.id} to={`/product/${product.id}`}>
               <ProductCard product={product} key={product.id} />
             </Link>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
