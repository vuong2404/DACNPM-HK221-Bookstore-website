const { conn, sql } = require("../config/dbconfig");

module.exports = function () {
  this.getOne = async (id, result) => {
    var query = `SELECT CATEGORY.* FROM Be_long,CATEGORY
    WHERE CATEGORY.categoryId = Be_long.categoryID AND Be_long.bookID= '${id}'`;
    try {
      let pool = await conn;
      let res = await pool.request().query(query);
      result(null, res.recordset);
    } catch (error) {
      console.error("Error in start():", error);
      result(error, null);
    }
  };
}