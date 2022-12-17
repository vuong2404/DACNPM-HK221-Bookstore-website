const express = require("express");
const feedback = require ("../controllers/feedback.controllers.js");

module.exports = app => {
    router = express.Router();

    router.get("/:id", feedback.getFeedback);
    router.post("/", feedback.addFeedback);
    app.use('/api/feedback', router);
} 