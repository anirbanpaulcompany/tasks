import React from 'react';
import { useNavigate } from 'react-router-dom';
import Trending from '../components/Trending';

const Home = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/products');
    };
  return (
    <div className="container" >
      <div className="row mt-4">
        <div className="col-md-12" style={{ display:'flex',justifyContent:'center', padding:15 }}>
          <img
            src="https://placehold.co/1200x400?text=Welcome+to+Shopie"
            className="img-fluid"
            alt="Shopie Banner"
          />
        </div>
      </div>
      <div style={{ textAlign:'center'}}>
        <div>
          <h2>Shopie</h2>
          <p>Discover our latest trending items.</p>
          <button
            onClick={handleButtonClick}
            style={{
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              padding: '10px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '10px',
              fontWeight:"900"
            }}
          >
            Browse Products
          </button>
          <Trending />
        </div>
      </div>
    </div>
  );
};

export default Home;
