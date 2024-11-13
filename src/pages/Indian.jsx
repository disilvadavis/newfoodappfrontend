// src/pages/Indian.jsx
import React from 'react';
import burger from '../assets/burger.jpg'; 
import friedchicken from '../assets/friedchicken.jpg'; 
import chickenpizza from '../assets/chickenpizza.jpg';

function Indian() {
  return (
    <div>
      <h1>Indian Food</h1>
      <p>Explore a variety of flavorful Indian dishes!</p>
      <img src={burger} alt="Food 1" />
        <img src={friedchicken} alt="Food 2" />
        <img src={chickenpizza} alt="Food 3" />
      {/* Add a list or grid of Indian dishes here */}
    </div>
  );
}

export default Indian;
