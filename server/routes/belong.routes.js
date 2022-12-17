const express = require("express");
const belong = require ("../controllers/belong.controllers");

module.exports = app => {
    router = express.Router();

    router.get("/:id", belong.getBelong); //example localhost:8080/api/order/10001
    app.use('/api/belong', router);
} 