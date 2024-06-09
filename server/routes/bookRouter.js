const express = require("express");
const {
  uploadBook,
  getAllBooks,
  updateBook,
  deleteBook,
  getBookByCategory,
  getBookById,
} = require("../controllers/bookcontroller");

const router = express.Router();

router.post("/upload_book", uploadBook);
router.get("/all_books", getAllBooks);
router.patch("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);
router.get("/books", getBookByCategory);
router.get("/book/:id", getBookById);

module.exports = router;
