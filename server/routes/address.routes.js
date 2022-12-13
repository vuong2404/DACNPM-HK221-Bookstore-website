const express = require("express");
const address = require ("../controllers/address.controllers.js");

module.exports = app => {
    router = express.Router();

    router.get("/:user_id", address.getList);  // example localhost:8080/api/address
    router.post("/", address.addNew)
    router.put("/:id", address.updateAddress)
    router.delete("/:id", address.deleteAddress)
    app.use('/api/address', router)
} 