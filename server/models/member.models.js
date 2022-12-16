const { conn, sql } = require("../config/dbconfig");

module.exports = function () {
    this.getAll = async (id, result) => {
        var query = `SELECT * FROM _user`;
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
        var query = `SELECT * FROM _user WHERE userId = '${id}'`;
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
        var query = `SELECT * FROM _user WHERE (userId = '${props.userId}' AND author='${props.author}' AND categoryId='${props.categoryId}') AND publisher='${props.publisher}}')`;
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
        console.log(newBook.userId);
        var query = `INSERT INTO _user VALUES (@userId, @title, @price, @author, @publisher , @pubYear, @description,@urlBook,'' , @amountInStorage, @categoryId)`;
        console.log(query);
        try {
            let pool = await conn;
            const res = await pool
                .request()
                .input("userId", sql.NVarChar, newBook.userId)
                .input("title", sql.NVarChar, newBook.title)
                .input("price", sql.Float, newBook.price)
                .input("author", sql.NVarChar, newBook.author)
                .input("publisher", sql.NVarChar, newBook.publisher)
                .input("pubYear", sql.Int, newBook.pubYear)
                .input("description", sql.NVarChar, newBook.description)
                .input("amountInStorage", sql.Int, newBook.amountInStorage)
                .input("categoryId", sql.NVarChar, newBook.categoryId)
                .input("urlBook", sql.NVarChar, newBook.urlBook)
                .query(query);

            result(null, res);
        } catch (error) {
            console.error("Error in start()::", error);
            result(error, null);
        }
    };

    this.update = async (id, _user, result) => {
        let query = `UPDATE _user
                      SET
                          title = @title, 
                          price = @price, 
                          author = @author, 
                          publisher = @publisher, 
                          pubYear = @pubYear, 
                          description = @description, 
                          amountInStorage = @amountInStorage, 
                          categoryId = @categoryId,
                          urlBook= @urlBook
                      WHERE userId = '${id}'`;
        try {
            let pool = await conn;
            const res = await pool
                .request()
                .input("title", sql.VarChar, _user.title)
                .input("price", sql.Float, _user.price)
                .input("author", sql.NVarChar, _user.author)
                .input("publisher", sql.NVarChar, _user.publisher)
                .input("pubYear", sql.Int, _user.pubYear)
                .input("description", sql.NVarChar, _user.description)
                .input("amountInStorage", sql.Int, _user.amountInStorage)
                .input("categoryId", sql.NVarChar, _user.categoryId)
                .input("urlBook", sql.NVarChar, _user.urlBook)
                .query(query);
            result(null, res);
        } catch (error) {
            console.error("Error in start()::", error);
            result(error, null);
        }
    };

    this.delete = async (id, result) => {
        let query = `Delete from _user where userId = '${id}'`;
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