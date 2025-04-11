// ProductCard.js
import React from 'react';
import PropTypes from 'prop-types';
import './productCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <span>${product.price}</span>
      <div className="rating">
        <span>Rating: {product.rating.rate}</span> ({product.rating.count} reviews)
      </div>
    </div>
  );
};

// Define prop types
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductCard;
