const { conn, sql } = require("../config/dbconfig");

module.exports = function () {
  this.getAll = async (params, result) => {
    var query = "SELECT * FROM _ORDER";
    let key = params.key || "";
    let status = params.status || "";
    if (key || status) {
      query += ` WHERE (orderID LIKE '%${key}%' OR status LIKE '%${key}%') `;
      if (status) {
        query += `AND status = '${status}'`;
      }
    }
    
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

  this.getOne = async (id, result) => {
    var query1 = `SELECT * FROM _ORDER WHERE orderID = ${id}`;
    var query2 = `SELECT bookID, quantity, totalMoney from  ORDER_ITEM WHERE orderID = ${id}`;
    try {
      let pool = await conn;
      let data1 = await pool.request().query(query1);
      let res = data1.recordset[0];
      
      pool = await conn;
      let data2 = await pool.request().query(query2);
      res.books = data2.recordset;
      
      var query3 = `SELECT city, district, ward, specificAddress, phoneNumber, receiverName from receive_info 
                      WHERE id = ${res.addressID}`
      pool = await conn;
      let data3 = await pool.request().query(query3);
      res.receiveInfo = data3.recordset[0];
    

      result(null, res);
    } catch (error) {
      console.error("Error in start():", error);
      result(error, null);
    }
  };

  this.create = async (newOrder, result) => {
    console.log(newOrder);
    var query1 = `INSERT INTO _ORDER VALUES (@userId, @addressId, @p_method, @count, @cost , GETDATE(), '', 'waiting')
                   SELECT SCOPE_IDENTITY() AS id`;
    let books = newOrder.books;
    console.log(query1);
    try {
      let pool = await conn;
      const res1 = await pool
        .request()
        .input("userId", sql.Int, newOrder.userID)
        .input("addressId", sql.NVarChar, newOrder.addressId)
        .input("p_method", sql.NVarChar, newOrder.paymentMethod)
        .input("count", sql.Int, 0)
        .input("cost", sql.Int, 0)
        .query(query1);

      let id = res1.recordset[0].id;
      books.forEach((item) => item.unshift(id));
      console.log(books);
      const res2 = await pool
        .request()
        .query(
          `INSERT INTO ORDER_ITEM(orderID, bookID, quantity) VALUES ${books.map(
            (book) => `(${book})`
          )}`
        );

      result(null, res2);
    } catch (error) {
      console.error("Error in start()::", error);
      result(error, null);
    }
  };

  this.updateStatus = async (order, result) => {
    let query = `UPDATE _ORDER SET status = @status WHERE orderID = @id`;
    try {
      let pool = await conn;
      const res1 = await pool
        .request()
        .input("status", sql.VarChar, order.status)
        .input("id", sql.Int, order.id)
        .query(query);
      result(null, res1);
    } catch (error) {
      console.error("Error in start()::", error);
      result(error, null);
    }
  };
};
