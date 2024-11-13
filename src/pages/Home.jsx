import React from 'react';
import Searchbar from '../components/Searchbar';
import Sidebar from '../components/Sidebar';
import '../styles/Home.css';

import burger from '../assets/burger.jpg'; 
import dessert from '../assets/dessert.jpg';
import friedchicken from '../assets/friedchicken.jpg'; 
import pancakes from '../assets/pancakes.jpg';
import pasta from '../assets/pasta.jpg'; 
import salad from '../assets/salad.jpg'; 
import pizza from '../assets/pizza.jpg';
import sushi from '../assets/sushi.jpg'; 
import steak from '../assets/steak.jpg'; 
import chickenpizza from '../assets/chickenpizza.jpg';
import mushroom from '../assets/mushroom.jpg'; 
import springroll from '../assets/springroll.jpg';
import cauliflowerfry from '../assets/cauliflowerfry.jpg'; 
import eggroll from '../assets/eggroll.jpg'; 
import cookie from '../assets/cookie.jpg'; 


function Home() {
  return (
    <div className="home-page">
      <Sidebar />
      <div className="content">
        <Searchbar />
        <div className="food-gallery">
          <h2>popular dishes</h2>
           
      <h1>Food Delivery App</h1>
    
        <img src={burger} alt="Food 1" />
        <img src={dessert} alt="Food 2" />
        <img src={friedchicken} alt="Food 3" />
        <img src={pancakes} alt="Food 4" />
        <img src={pasta} alt="Food 5" />
        <img src={salad} alt="Food 6" />
        <img src={steak} alt="Food 7" />
        <img src={pizza} alt="Food 8" />
        <img src={sushi} alt="Food 9" />
        <img src={chickenpizza} alt="Food 10" />
        <img src={mushroom} alt="Food 11" />
        <img src={springroll} alt="Food 12"/>
        <img src={pizza} alt="Food 13" />
        <img src={cauliflowerfry} alt="Food 14" />
        <img src={eggroll} alt="Food 15" />
        <img src={cookie} alt="Food 16" />
        
       
      </div>
    </div>
  
          
             </div>
       
        
    
    
  );
}

export default Home;
