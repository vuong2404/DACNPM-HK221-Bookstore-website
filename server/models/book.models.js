const { conn, sql } = require("../config/dbconfig");

module.exports = function () {
  this.getAll = async (id, result) => {
    var query = `SELECT * FROM BOOK`;
    try {
      let pool = await conn;
      let res = await pool.request().query(query);
      result(null, res.recordset);
    } catch (error) {
      console.error("Error in start():", error);
      result(error, null);
    }
  };

  this.getOne = async (id, result) => {
    var query = `SELECT * FROM BOOK WHERE bookId = '${id}'`;
    try {
      let pool = await conn;
      let res = await pool.request().query(query);
      result(null, res.recordset);
    } catch (error) {
      console.error("Error in start():", error);
      result(error, null);
    }
  };

  this.getBooks = async (props, result) => {
    var query = `SELECT * FROM BOOK WHERE (bookId = '${props.bookId}' AND author='${props.author}' AND categoryId='${props.categoryId}') AND publisher='${props.publisher}}')`;
    console.log(query);
    try {
      let pool = await conn;
      let res = await pool.request().query(query);
      result(null, res.recordset);
    } catch (error) {
      console.error("Error in start():", error);
      result(error, null);
    }
  };

  this.create = async (newBook, result) => {
    console.log(newBook.bookId);
    var query = `INSERT INTO BOOK VALUES ( @title, @price, @author, @publisher , @pubYear, @description,@urlBook,@sold_number , @amountInStorage)`;
    console.log(query);
    try {
      let pool = await conn;
      const res = await pool
        .request()
        .input("title", sql.NVarChar, newBook.title)
        .input("price", sql.Float, newBook.price)
        .input("author", sql.NVarChar, newBook.author)
        .input("publisher", sql.NVarChar, newBook.publisher)
        .input("pubYear", sql.Int, newBook.pubYear)
        .input("description", sql.NVarChar, newBook.description)
        .input("sold_number", sql.Int, book.sold_number)
        .input("amountInStorage", sql.Int, newBook.amountInStorage)
        .input("urlBook", sql.NVarChar, newBook.urlBook)
        .query(query);

      result(null, res);
    } catch (error) {
      console.error("Error in start()::", error);
      result(error, null);
    }
  };

  this.update = async (id, book, result) => {
    let query = `UPDATE BOOK
                      SET title = @title, 
                          price = @price, 
                          author = @author, 
                          publisher = @publisher, 
                          pubYear = @pubYear, 
                          description = @description, 
                          amountInStorage = @amountInStorage, 
                          sold_number = @sold_number,
                          urlBook= @urlBook
                      WHERE bookId = '${id}'`;
    try {
      let pool = await conn;
      const res = await pool
        .request()
        .input("title", sql.VarChar, book.title)
        .input("price", sql.Float, book.price)
        .input("author", sql.NVarChar, book.author)
        .input("publisher", sql.NVarChar, book.publisher)
        .input("pubYear", sql.Int, book.pubYear)
        .input("description", sql.NVarChar, book.description)
        .input("amountInStorage", sql.Int, book.amountInStorage)
        .input("sold_number", sql.Int, book.sold_number)
        .input("urlBook", sql.NVarChar, book.urlBook)
        .query(query);
      result(null, res);
    } catch (error) {
      console.error("Error in start()::", error);
      result(error, null);
    }
  };

  this.delete = async (id, result) => {
    let query = `Delete from BOOK where bookId = '${id}'`;
    try {
      let pool = await conn;
      const res = await pool.request().query(query);
      result(null, res);
    } catch (error) {
      console.error("Error in start()::", error);
      result(error, null);
    }
  };
  
};
