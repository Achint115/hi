import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import CategoryPage from './components/categoryPage';
import ProductDetailPage from './components/ProductDetailPage';
import Navbar from './components/navbar';
import Register from './components/register';
import Login from "./components/login";

const App = () => {
  return (
    <Router>
     
     <Navbar/>
     
      <Routes>
        
        <Route path="/" element={<HomePage />} /> {/* Home page route */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} /> {/* Category page route */}
        <Route path="/product/:productId" element={<ProductDetailPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
