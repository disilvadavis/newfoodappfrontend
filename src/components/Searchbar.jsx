import React, { useState } from 'react';
import '../styles/Searchbar.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search for food..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
