const { sql, conn } = require("../config/dbconfig");
module.exports = function () {
  this.getAll = async (result) => {
    var query = "SELECT * FROM _USER";
    try {
      let pool = await conn;
      let res = await pool.request().query(query);
      result(null, res.recordset);
    } catch (error) {
      console.error("Error in start():", error);
      result(true, null);
    }
  };

  this.getOne = async (id, result) => {
    var query = `SELECT * FROM _USER WHERE userID = @varID`;
    try {
      let pool = await conn;
      let res = await pool.request().input("varID", sql.Int, id).query(query);
      result(null, res.recordset);
    } catch (error) {
      console.error("Error in start():", error);
      result(true, null);
    }
  };

  this.create = async (newUser, result) => {
    let orderCode = Math.floor(Math.random() * 100000);
    var query1 = `INSERT INTO _ORDER (userID, address, orderCode, paymentMethod, total_quantity, totalMoney, createAt, deliveryCode) 
                    VALUES (@userId, @address, @orderCode, @p_method, @quantity, @cost , @time, @d_code)
                    SELECT SCOPE_IDENTITY() AS id`;
    let books = newOrder.books;
    try {
      let pool = await conn;
      const res1 = await pool
        .request()
        .input("userId", sql.Int, newOrder.userID)
        .input("address", sql.NVarChar, newOrder.address)
        .input("orderCode", sql.VarChar, orderCode)
        .input("p_method", sql.NVarChar, newOrder.paymentMethod)
        .input("quantity", sql.Int, newOrder.total_quantity)
        .input("cost", sql.Money, newOrder.total_money)
        .input("time", sql.DateTime, "2022-04-22 10:34:23")
        .input("d_code", sql.VarChar, newOrder.d_code)
        .query(query1);

      let id = res1.recordset[0].id;
      books.forEach((item) => item.unshift(id));

      const res2 = await pool
        .request()
        .query(
          `INSERT INTO ORDER_ITEM(orderID, bookID, quantity, totalMoney) VALUES ${books.map(
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
