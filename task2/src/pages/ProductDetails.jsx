import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../components/products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="container mt-4" style={{ border: '1px solid #c4bbbb', width: '90%', marginLeft:50, marginTop:50, marginBottom:100, paddingLeft:20, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        
        <div>
          <h1>Products Details</h1>
          <div className="card-body" style={{display:'flex', flexWrap: 'wrap',justifyContent:'flex-start', gap:70 , }}>
              <img
                src={product.productImg1}
                alt={product.name}
                className="img-fluid"
              />
              <img
                src={product.productImg2}
                alt={product.name}
                className="img-fluid mt-2"
              />
              <img
                src={product.productImg3}
                alt={product.name}
                className="img-fluid mt-2"
              />
            </div>
        </div>
          <div className="card">
            <div className="card-body">
              <h2>Name : {product.name}</h2>
              <p>ID: {product.id}</p>
              <p>Description: {product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
        </div>
      </div>
  );
};

export default ProductDetails;
