// src/pages/Mexican.jsx
import React from 'react';
import cookie from '../assets/cookie.jpg'; 
import eggroll from '../assets/eggroll.jpg';
import pizza from '../assets/pizza.jpg'; 


function Mexican() {
  return (
    <div>
      <h1>Mexican Food</h1>
      <p>Discover delicious Mexican food options!</p>
      <img src={cookie} alt="Food 1" />
        <img src={eggroll} alt="Food 2" />
        <img src={pizza} alt="Food 3" />
      {/* Add a list or grid of Mexican dishes here */}
    </div>
  );
}

export default Mexican;
