import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App" style={{width:'100%' , height:'100%'}}>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
