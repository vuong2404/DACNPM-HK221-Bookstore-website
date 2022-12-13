const { conn, sql } = require("../config/dbconfig");

module.exports = function () {
  this.getAll = async (id, result) => {
    var query = `SELECT * FROM CART WHERE userid = ${id}`;
    try {
      let pool = await conn;
      let res = await pool.request().query(query);  
      result(null, res.recordset);
    } catch (error) {
      console.error("Error in start():", error);
      result(error, null);
    }
  };


//   this.add = async (cartItem, result) => {
//     console.log(newAddress);
//     var query = `INSERT INTO cart VALUES ()`;
//     try {
//       let pool = await conn;
//       const res = await pool
//         .request()
//         .query(query);

//       result(null, res);
//     } catch (error) {
//       console.error("Error in start()::", error);
//       result(error, null);
//     }
//   };

//   this.update = async (id, newAddress, result) => {
//     let query = `UPDATE WHERE id = ${id}`;
//     try {
//       let pool = await conn;
//       const res1 = await pool
//         .request()
       
//         .query(query);
//       result(null, res1);
//     } catch (error) {
//       console.error("Error in start()::", error);
//       result(error, null);
//     }
//   };

//   this.delete = async (id, result) => {
//     let query = `Delete from cart where id = ${id}`;
//     try {
//       let pool = await conn;
//       const res = await pool
//         .request()
//         .query(query);
//       result(null, res);
//     } catch (error) {
//       console.error("Error in start()::", error);
//       result(error, null);
//     }
//   };
};
