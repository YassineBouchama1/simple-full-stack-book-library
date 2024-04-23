const router = require('express').Router();
const books = require('./books_dumb');

let booksDirectory = books;

router.get('/books', function (req, res) {
  res.send(booksDirectory);
});

// router.get('/books/:id', function (req, res) {
//   const { id } = req.params;

//   const book = booksDirectory.find(b => b.isbn === id);
//   if (!book) return res.status(404).send('Book does not exist');

//   res.send(book);
// });




// url example 
//localhost:5000/api/v1/books/title?title=nameTitle

http: router.get("/books/title/:word", function (req, res) {
  const { word } = req.params;

  if (!word) return res.send(booksDirectory); //  if there is no title return all books

  const matchingBooks = booksDirectory.filter((book) =>
    book.title.toLowerCase().includes(word.toLowerCase())
  );

  if (matchingBooks.length === 0) {
    return res.send([]);
  }

  res.send(matchingBooks);
});


// url example 
//localhost:5000/api/v1/books/author?title=nameauthor
router.get("/books/author/:word", function (req, res) {
  const { word } = req.params;

  const matchingBooks = booksDirectory.filter((book) =>
    book.authors.some((a) => a.toLowerCase().includes(word.toLowerCase()))
  );

  if (matchingBooks.length === 0) {
    return res.send([]);
  }

  res.send(matchingBooks);
});



module.exports = router;