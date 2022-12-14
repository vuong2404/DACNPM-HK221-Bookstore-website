const express = require("express");
const user = require("../controllers/user.controllers.js");

module.exports = (app) => {
  router = express.Router();
  router.get("/:user_id", user.getList);
  router.get("/order/:id", user.getDetails);

  router.post("/", user.addNew);
  router.put("/:id", user.updateUser);

  app.use("/api/user", router);
};
