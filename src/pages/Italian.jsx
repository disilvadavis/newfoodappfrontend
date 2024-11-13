// src/pages/Italian.jsx
import React from 'react';
import mushroom from '../assets/mushroom.jpg'; 
import pancakes from '../assets/pancakes.jpg';
import pasta from '../assets/pasta.jpg'; 


function Italian() {
  return (
    <div>
      <h1>Italian Food</h1>
      <p>Enjoy classic Italian dishes!</p>
      <img src={mushroom} alt="Food 1" />
        <img src={pancakes} alt="Food 2" />
        <img src={pasta} alt="Food 3" />
      {/* Add a list or grid of Italian dishes here */}
    </div>
  );
}

export default Italian;
