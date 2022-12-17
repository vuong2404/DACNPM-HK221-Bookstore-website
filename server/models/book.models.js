const { conn, sql } = require("../config/dbconfig");

module.exports = function () {
  this.getAll = async (params, result) => {
    var query = `SELECT * FROM BOOK`;
    let key = params.key || "";
    if (key) {
      query += ` WHERE title LIKE '%${key}%' `;
    }
    
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

  this.create = async (newBook, result) => {
    console.log(newBook);
    var query = `INSERT INTO BOOK VALUES (@bookId, @title, @price, @author, @publisher , @pubyear, @description,'','' , @amountInStorage, @categoryId)`;
    console.log(query);
    try {
      let pool = await conn;
      const res = await pool
        .request()
        .input("bookId", sql.NVarChar, newBook.bookID)
        .input("title", sql.NVarChar, newBook.title)
        .input("price", sql.Float, newBook.price)
        .input("author", sql.NVarChar, newBook.author)
        .input("publisher", sql.NVarChar, newBook.publisher)
        .input("pubyear", sql.Int, newBook.pubyear)
        .input("description", sql.NVarChar, newBook.description)
        .input("amountInStorage", sql.Int, newBook.amountInStorage)
        .input("categoryId", sql.NVarChar, newBook.categoryId)
        .query(query);

      result(null, res);
    } catch (error) {
      console.error("Error in start()::", error);
      result(error, null);
    }
  };

  this.update = async (order, result) => {
    let query = `UPDATE BOOK
                      SET bookId = @bookId, 
                          title = @title, 
                          price = @price, 
                          author = @author, 
                          publisher = @publisher, 
                          pubyear = @pubyear, 
                          description = @description, 
                          amountInStorage = @amountInStorage, 
                          categoryId = @categoryId
                      WHERE bookId = '${id}'`;
    try {
      let pool = await conn;
      const res = await pool
        .request()
        .input("bookId", sql.NVarChar, newUser.bookId)
        .input("title", sql.VarChar, newUser.title)
        .input("price", sql.Float, newUser.price)
        .input("author", sql.NVarChar, newUser.author)
        .input("publisher", sql.NVarChar, newUser.publisher)
        .input("pubyear", sql.Int, newUser.pubyear)
        .input("description", sql.NVarChar, newUser.description)
        .input("amountInStorage", sql.Int, newUser.amountInStorage)
        .input("categoryId", sql.NVarChar, newUser.categoryId)
        .query(query);
      result(null, res);
    } catch (error) {
      console.error("Error in start()::", error);
      result(error, null);
    }
  };
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
