require("dotenv").config();
var sql = require("mssql/msnodesqlv8");

let config = {
  database: process.env.DATABASE,
  server: process.env.SERVER,
  driver: "msnodesqlv8",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
  },
};

const conn = new sql.ConnectionPool(config).connect().then((pool) => {
  return pool;
});

module.exports = {
  conn,
  sql,
};
