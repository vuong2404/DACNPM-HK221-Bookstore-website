const express = require("express");
const order = require ("../controllers/order.controllers.js");

module.exports = app => {
    router = express.Router();

    router.get("/", order.getList);  // example localhost:8080/api/order
    router.get("/:id", order.getDetails); //example localhost:8080/api/order/10001
    router.post("/", order.addNew)
    router.put("/", order.updateStatus)
    app.use('/api/order', router)
} 