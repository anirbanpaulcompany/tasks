import React from 'react';

const Trending = () => {
  const images = [
    'https://placehold.co/300x300?text=Trending+Image+1',
    'https://placehold.co/300x300?text=Trending+Image+2',
    'https://placehold.co/300x300?text=Trending+Image+3',
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Trending</h2>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>Check out our trending products</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '100px' }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Trending ${index + 1}`} style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
