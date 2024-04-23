import React, { useState, useEffect } from "react";
import axios from "axios";

const BookListComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);




  const fetchBooks = async (url = 'http://localhost:5000/api/v2/books/') => {

    // active loading
    setIsLoading(true)
    try {
      const response = await axios.get(url);


      setSearchResults(response.data);
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)

    };
  }
  useEffect(() => {
    fetchBooks();
  }, []);

  const onSearch = () => {
    console.log(searchType)
    console.log(searchTerm)
    if (searchTerm.trim() !== "") {
      searchType === "title" ? fetchBooks(`http://localhost:5000/api/v2/books/title/${searchTerm}`) : fetchBooks(`http://localhost:5000/api/v2/books/author/${searchTerm}`);

    } else {

      fetchBooks('http://localhost:5000/api/v2/books/');
    }
  };

  return (
    <div className="px-2 md:px-6">
      <div className="flex items-center">
        <select
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          onChange={(e) => setSearchType(e.target.value)}
        >
          {/* <option value="" disabled>Search By</option> */}
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
          onClick={() => onSearch()}
        >
          Search {searchType && "by " + searchType}
        </button>
      </div>

      <div className="container mx-auto mt-10">
        <h1 className="text-3xl mb-8">Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {isLoading ? <h3>Loading ...</h3> :

            searchResults.length === 0 ? <h2>No Books </h2> : (searchResults.map((book) => (
              <div key={book.isbn} className="shadow-md rounded overflow-hidden">
                <img
                  src={book.thumbnailUrl}
                  className="w-full h-48 object-cover"
                  alt={book.title}
                />
                <div className="px-4 py-2">
                  <h5 className="text-xl font-bold">{book.title}</h5>
                  <p className="text-gray-700 mb-2">{book.plot}</p>
                  <ul>
                    <li className="flex items-center text-gray-700 mb-1">
                      <span className="mr-2">Genres:</span>
                      <span>"jdhbd"</span>
                    </li>
                    <li className="flex items-center text-gray-700 mb-1">
                      <span className="mr-2">Pages:</span>
                      <span>{book.pageCount}</span>
                    </li>
                    <li className="flex items-center text-gray-700 mb-1">
                      <span className="mr-2">Rating:</span>
                      <span>"{book.rating}"</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="mr-2">Author:</span>
                      <span>
                        {book.authors[0]} {book.authors[1]}
                      </span>
                    </li>
                  </ul>
                  <a
                    href={'www.google.com'}
                    className="text-indigo-500 hover:text-indigo-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More Info
                  </a>
                </div>
              </div>
            )))
          }

        </div>
      </div>
    </div>
  );
};

export default BookListComponent;
