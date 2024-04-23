import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [title, setTitle] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const responseByTitle = await axios.get('https://books-api7.p.rapidapi.com/books/find/title', {
        params: {
          title,
        },
        headers: {
          'X-RapidAPI-Key': '5d4ddf6097msh911242527e98044p1d4398jsne1bf694d4335',
          'X-RapidAPI-Host': 'books-api7.p.rapidapi.com'
        }
      });

      setSearchResults(responseByTitle.data);
      setError(null);
    } catch (error) {
      console.error('Error searching books:', error);
      setSearchResults([]);
      setError('Error searching books. Please try again.');
    }
  };

  useEffect(() => {
    handleSearch();
  }, [title]);

  return (
    <div className="flex flex-col items-center">
      <form className="w-full mb-4 flex justify-center">
        <input
          className="rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 w-full"
          type="search"
          placeholder="Search by Author or Title"
          aria-label="Search"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md ml-2"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {searchResults.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-2">Search Results by Title</h2>
          <ul className="list-disc pl-4">
            {searchResults.map((book, index) => (
              <li key={index}>{book.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
