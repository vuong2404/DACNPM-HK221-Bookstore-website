const { conn, sql } = require("../config/dbconfig");

module.exports = function () {
  this.getAll = async (id, result) => {
    var query = `SELECT * FROM _USER WHERE userid = ${id}`;
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
    var query1 = `SELECT o.orderID, o.userID, o.addressID, o.paymentMethod, o.total_quantity, o.totalMoney, o.createAt, o.deliveryCode, o.status, u.fullName FROM _ORDER o, _USER u WHERE o.userID = ${id} and u.userID = o.userID`;

    try {
      let pool = await conn;
      let data1 = await pool.request().query(query1);

      let res = data1.recordset;
      var n = res.length;
      for (i = 0; i < n; i++) {
        var query2 = `SELECT o.bookID, o.quantity, o.totalMoney,o.orderID, b.title, b.price, b.author, b.urlBook from ORDER_ITEM o, BOOK b WHERE o.orderID = ${res[i].orderID} and b.bookId = o.bookID`;
        pool = await conn;
        let data2 = await pool.request().query(query2);
        res[i].books = [];
        res[i].books = data2.recordset;
      }
      console.log(res);

      result(null, res);
    } catch (error) {
      console.error("Error in start():", error);
      result(error, null);
    }
  };

  this.create = async (newUser, result) => {
    console.log(newUser);
    var query = `INSERT INTO _USER (fullName, email, phoneNum, gender, birthDate, registerDate, address) VALUES(@fullName, @email, @phoneNum, @gender, @birthDate, @registerDate, @address)`;
    try {
      let pool = await conn;
      const res = await pool
        .request()
        .input("fullName", sql.NVarChar, newUser.fullName)
        .input("email", sql.VarChar, newUser.email)
        .input("phoneNum", sql.VarChar, newUser.phoneNum)
        .input("gender", sql.NVarChar, newUser.gender)
        .input("birthDate", sql.Date, newUser.birthDate)
        .input("registerDate", sql.Date, newUser.registerDate)
        .input("address", sql.NVarChar, newUser.address)
        .query(query);

      result(null, res);
    } catch (error) {
      console.error("Error in start()::", error);
      result(error, null);
    }
  };

  this.update = async (id, newUser, result) => {
    let query = `UPDATE _USER 
                      SET fullName = @fullName, 
                          email = @email, 
                          phoneNum = @phoneNum, 
                          gender = @gender, 
                          birthDate = @birthDate, 
                          registerDate = @registerDate, 
                          address = @address 
                      WHERE userId = ${id}`;
    try {
      let pool = await conn;
      const res1 = await pool
        .request()
        .input("fullName", sql.NVarChar, newUser.fullName)
        .input("email", sql.VarChar, newUser.email)
        .input("phoneNum", sql.VarChar, newUser.phoneNum)
        .input("gender", sql.NVarChar, newUser.gender)
        .input("birthDate", sql.Date, newUser.birthDate)
        .input("registerDate", sql.Date, newUser.registerDate)
        .input("address", sql.NVarChar, newUser.address)
        .query(query);
      result(null, res1);
    } catch (error) {
      console.error("Error in start()::", error);
      result(error, null);
    }
  };
};
