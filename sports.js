// Sports.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sports = () => {
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">Your Logo</div>
          <ul className="flex space-x-4">
            <li><Link to="/athletics" className="text-white hover:text-gray-300">Athletics</Link></li>
            <li><Link to="/badminton" className="text-white hover:text-gray-300">Badminton</Link></li>
            <li><Link to="/table-tennis" className="text-white hover:text-gray-300">Table Tennis</Link></li>
            {/* Add links for other sports or pages */}
            <li><Link to="/about" className="text-white hover:text-gray-300">About Wellplayed</Link></li>
            <li><Link to="/admin" className="text-white hover:text-gray-300">Admin</Link></li>
            <li><Link to="/sign-out" className="text-white hover:text-gray-300">Sign Out</Link></li>
          </ul>
        </div>
      </nav>
      {/* Add content specific to the Sports page */}
    </div>
  );
};

export default Sports;
