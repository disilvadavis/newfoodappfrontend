import React from 'react';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/mexican">Mexican</Link></li>
        <li><Link to="/indian">Indian</Link></li>
        <li><Link to="/italian">Italian</Link></li>
        {/* Add more categories as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;



