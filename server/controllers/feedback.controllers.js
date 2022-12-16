const Feedback = require("../models/feedback.models");
var model = new Feedback();

exports.getFeedback = async (req, res) => {
    let id = req.params.id;
    model.getOne(id, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else res.status(200).send(data);
    });
  };

  exports.addFeedback = async (req, res) => {
    model.create(req.body, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  };