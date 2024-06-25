import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../components/products';

const ProductList = () => {
  return (
    <div className="container mt-4" style={{paddingLeft:70, paddingBottom:20, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
        <h1>Products List</h1>
        <div  style={{ border: '1px solid #c4bbbb', width: '50%' }}>
        {products.map((product) => (
          <div key={product.id}  style={{ borderBlockStart: '1px solid #c4bbbb', paddingInline:20, margin:0, paddingTop:5, paddingBottom:5}}>
                <h4 style={{padding:10, margin:0}}>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </h4>
            <div ></div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
