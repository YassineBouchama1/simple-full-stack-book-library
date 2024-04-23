import React from 'react';

function NavBar() {
  return (
    <nav className="bg-gray-800 fixed top-0 left-0 w-full px-4 py-2 flex justify-between items-center">
      <a href="/" className="text-white text-xl font-bold">BookVerse</a>
      <button className="text-white focus:outline-none md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zM4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        </svg>
      </button>
      <div className="hidden md:flex items-center space-x-4">
        {/* Add links here */}
        {/* <a href="/" className="text-white hover:text-gray-200 px-3 py-2 rounded-md">Home</a>
        <a href="/books" className="text-white hover:text-gray-200 px-3 py-2 rounded-md">Books</a> */}
      </div>
    </nav>
  );
}

export default NavBar;
