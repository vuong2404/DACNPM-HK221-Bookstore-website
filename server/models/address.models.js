const { conn, sql } = require("../config/dbconfig");

module.exports = function () {
  this.getAll = async (id, result) => {
    var query = `SELECT * FROM receive_info WHERE userid = ${id}`;
    try {
      let pool = await conn;
      let res = await pool.request().query(query);
      result(null, res.recordset);
    } catch (error) {
      console.error("Error in start():", error);
      result(error, null);
    }
  };

  this.create = async (newAddress, result) => {
    console.log(newAddress);
    var query = `INSERT INTO receive_info VALUES (@userID, @city, @district, @ward, @specificAddress, @phoneNumber, @receiverName,@type)`;
    try {
      let pool = await conn;
      const res = await pool
        .request()
        .input("userID", sql.Int, newAddress.userID)
        .input("city", sql.NVarChar, newAddress.city)
        .input("district", sql.NVarChar, newAddress.district)
        .input("ward", sql.NVarChar, newAddress.ward)
        .input("specificAddress", sql.NVarChar, newAddress.specificAddress)
        .input("phoneNumber", sql.NVarChar, newAddress.phoneNumber)
        .input("receiverName", sql.NVarChar, newAddress.receiverName)
        .input("type", sql.NVarChar, newAddress.type)
        .query(query);

      result(null, res);
    } catch (error) {
      console.error("Error in start()::", error);
      result(error, null);
    }
  };

  this.update = async (id, newAddress, result) => {
    let query = `UPDATE receive_info SET userID = @userID, 
                                         city = @city, 
                                         district = @district,
                                         ward = @ward, 
                                         specificAddress = @specificAddress, 
                                         phoneNumber = @phoneNumber, 
                                         receiverName = @receiverName,
                                         type = @type
                                      WHERE id = ${id}`;
    try {
      let pool = await conn;
      const res1 = await pool
        .request()
        .input("userID", sql.Int, newAddress.userID)
        .input("city", sql.NVarChar, newAddress.city)
        .input("district", sql.NVarChar, newAddress.district)
        .input("ward", sql.NVarChar, newAddress.ward)
        .input("specificAddress", sql.NVarChar, newAddress.specificAddress)
        .input("phoneNumber", sql.NVarChar, newAddress.phoneNumber)
        .input("receiverName", sql.NVarChar, newAddress.receiverName)
        .input("type", sql.NVarChar, newAddress.type)
        .query(query);
      result(null, res1);
    } catch (error) {
      console.error("Error in start()::", error);
      result(error, null);
    }
  };

  this.delete = async (id, result) => {
    let query = `Delete from receive_info where id = ${id}`;
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
