import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

 export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Use the `navigate` function to navigate to the dedicated place page
    navigate(`/place/${searchQuery}`);
  };

  return (
    <div className='sidefull6'>
    <div className='search6'>
      <input className='srch6'
        type="text"
        placeholder="Search for a place..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className='btn6' onClick={handleSearch}>Search</button>

      
    </div>
    </div>
  );
}
