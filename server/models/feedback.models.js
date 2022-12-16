const { conn, sql } = require("../config/dbconfig");

module.exports = function (){
    this.getOne = async (id, result) => {
        var query = `SELECT feedback.*,_user.fullName FROM feedback,_user
        WHERE bookId = '${id}' AND _user.userId=feedback.userId`;
        try {
          let pool = await conn;
          let res = await pool.request().query(query);
          result(null, res.recordset);
        } catch (error) {
          console.error("Error in start():", error);
          result(error, null);
        }
      };
    
      this.create = async (newFeedback, result) => {
        console.log(newFeedback);
        var query = `SET IDENTITY_INSERT dbo.feedback OFF;
        INSERT INTO feedback VALUES (@bookId,@userId,@rateStar,@review);
        SET IDENTITY_INSERT dbo.feedback ON;`;
        console.log(query);
        try {
          let pool = await conn;
          const res = await pool
            .request()
            // .input("fdId", sql.Int, newFeedback.fdId)
            .input("bookId", sql.Int, newFeedback.bookId)
            .input("userId", sql.Int, newFeedback.userId)
            .input("rateStar", sql.Int, newFeedback.rateStar)
            .input("review", sql.NVarChar, newFeedback.review)
            .query(query);
    
          result(null, res);
        } catch (error) {
          console.error("Error in start()::", error);
          result(error, null);
        }
      };
}