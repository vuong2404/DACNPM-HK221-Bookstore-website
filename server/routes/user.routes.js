const express = require("express");
const user = require("../controllers/user.controllers.js");

module.exports = (app) => {
  router = express.Router();

  router.get("/", user.getList); // example localhost:8080/api/user
  router.get("/:id", user.getDetails); //example localhost:8080/api/user/10001
  router.post("/", user.addNew);
  router.put("/", user.updateStatus);
  app.use("/api/user", router);
};
