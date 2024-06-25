import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#141414',width:'100%', paddingLeft:50 , paddingTop:10, paddingBottom:10}}>
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="navbar-brand m-0" style={{ color: '#ffffff', fontSize: '30px' }}>
          <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>
            Shopie
          </Link>
        </h1>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav" style={{ display:'flex', flexDirection: 'row' }}>
            <div className="nav-item">
              <Link className="nav-link" to="/" style={{ color: '#ffffff', textDecoration: 'none', margin: '0 10px' }}>
                Home
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/products" style={{ color: '#ffffff', textDecoration: 'none', margin: '0 10px' }}>
                Products
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: '#ffffff', textDecoration: 'none', margin: '0 10px' }}>
                About
              </Link>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
