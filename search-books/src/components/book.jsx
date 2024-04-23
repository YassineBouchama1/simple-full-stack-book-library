import React, { useState, useEffect } from "react";
import axios from "axios";

export const BookListComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchBooksByTitle = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/books/title?title=${searchTerm}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      fetchBooksByTitle();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="px-2 md:px-6">
      <div class="flex items-center">
        <select
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          onChange={(e) => setSearchTerm(e.target.value)}
        >
          <option value="" disabled> Search By</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
      </div>

      <div className="w-full mb-4 flex justify-center">
        <input
          className="rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 w-full"
          type="search"
          placeholder="Search by Author or Title"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md ml-2"
          type="button"
          // onClick={() => handleSearch(title)}
        >
          Search
        </button>
      </div>

      <div className="container mx-auto mt-10">
        <h1 className="text-3xl mb-8">Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {searchResults.map((book) => (
            <div key={book._id} className="shadow-md rounded overflow-hidden">
              <img
                src={book.cover}
                className="w-full h-48 object-cover"
                alt={book.title}
              />
              <div className="px-4 py-2">
                <h5 className="text-xl font-bold">{book.title}</h5>
                <p className="text-gray-700 mb-2">{book.plot}</p>
                <ul>
                  <li className="flex items-center text-gray-700 mb-1">
                    <span className="mr-2">Genres:</span>
                    <span>{book.genres.join(", ")}</span>
                  </li>
                  <li className="flex items-center text-gray-700 mb-1">
                    <span className="mr-2">Pages:</span>
                    <span>{book.pages}</span>
                  </li>
                  <li className="flex items-center text-gray-700 mb-1">
                    <span className="mr-2">Rating:</span>
                    <span>{book.rating}</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2">Author:</span>
                    <span>
                      {book.author.first_name} {book.author.last_name}
                    </span>
                  </li>
                </ul>
                <a
                  href={book.url}
                  className="text-indigo-500 hover:text-indigo-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Info
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookListComponent;
