const express = require("express");
const book = require ("../controllers/book.controllers.js");

module.exports = app => {
    router = express.Router();

    router.get("/", book.getList);  // example localhost:8080/api/order
    router.get("/:id", book.getBook); //example localhost:8080/api/order/10001
    router.get("/", book.searchBooks);
    router.post("/", book.addBook);
    router.put("/:id", book.updateBook);
    router.delete("/:id", book.deleteBook);
    app.use('/api/book', router);
} 