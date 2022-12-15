const express = require("express");
const cart = require ("../controllers/cart.controllers.js");

module.exports = app => {
    router = express.Router();

    router.get("/:user_id", cart.getCart);  // example localhost:8080/api/cart
    router.post("/:user_id", cart.addToCart);
    router.put("/:user_id", cart.updateCart)
    router.delete("/:id", cart.deleteCartItem)
    app.use('/api/cart', router)
} 