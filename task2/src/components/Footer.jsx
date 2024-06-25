import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-light" style={{  height:'100%', width:'100%', padding:10, paddingLeft:90, paddingRight:40, backgroundColor: '#141414'}}>
      <div className="container">
        <span className="text-muted" style={{ color:'#ffffff'}} >
          &copy; 2024 Shopie. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
