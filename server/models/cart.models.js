const { conn, sql } = require("../config/dbconfig");

module.exports = function () {
  this.getAll = async (id, result) => {
    var query1 = `SELECT * FROM CART WHERE userid = ${id}`;
    var query2 = `SELECT C.cartId, C.bookId, C.quantity, C.isSelected, C.total, B.title, B.price, B.urlBook FROM CART_ITEM C, Book B 
                                  WHERE cartId = @cartID AND B.bookId = C.bookId`
    try {
      let pool = await conn;
      let res1 = await pool.request().query(query1);  

      let cartID = res1.recordset[0].cartID;
      console.log(cartID)
      pool = await conn;
      let res2 = await pool.request().input("cartId", sql.Int, cartID)
          .query(query2);  

      data = res1.recordset[0]; 
      data.books = res2.recordset ;

      result(null, data);
    } catch (error) {
      console.error("Error in start():", error);
      result(error, null);
    }
  };

  this.add = async (user_id, cartItem, result) => {
    console.log(cartItem);
    var query = `INSERT INTO cart_item(cartId, bookId, quantity) VALUES (@cartID, ${cartItem.bookID}, ${cartItem.quantity})`;
    try {
      let pool = await conn;
      const res1 = await pool
        .request()
        .query(`SELECT cartID from CART where userID = ${user_id}`);

      let cartID = res1.recordset[0].cartID;
      console.log(cartID)

      pool = await conn;
      const res = await pool
        .request().input("cartId", sql.Int, cartID)
        .query(query);

      console.log(res)
      result(null, res);
    } catch (error) {
      console.error("Error in start()::", error);
      result(error, null);
    }
  };

  this.update = async (user_id, cart_item, result) => {
    let query = `UPDATE Cart_item SET quantity = ${cart_item.quantity} WHERE Cart_item.cartId = @cartId AND Cart_item.bookId = ${cart_item.bookId}`;
    try {
      let pool = await conn;
      const res1 = await pool
        .request()
        .query(`SELECT cartID from CART where userID = ${user_id}`);
        console.log(res1)
      let cartID = res1.recordset[0].cartID;

      console.log(cartID)
      pool = await conn;
      const res = await pool
        .request()
        .input("cartId", sql.Int, cartID)
        .query(query);
      result(null, res);

    } catch (error) {
      console.error("Error in start()::", error);
      result(error, null);
    }
  };

  this.delete = async (user_id,bookID, result) => {
    let query = `Delete from cart_item WHERE cartId = @cartID AND bookId = @bookID`;
    try {
      let pool = await conn;
      const res1 = await pool
        .request()
        .query(`SELECT cartID from CART where userID = ${user_id}`);
      let cartID = res1.recordset[0].cartID;

      pool = await conn;
      const res = await pool
        .request()
        .input("cartID", sql.Int, cartID)
        .input("bookID", sql.Int, bookID)
        .query(query);
      result(null, res);
    } catch (error) {
      console.error("Error in start()::", error);
      result(error, null);
    }
  };
};
