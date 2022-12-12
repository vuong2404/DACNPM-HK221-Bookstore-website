const User = require("../models/order.models");
var model = new User();

exports.getList = async (req, res) => {
  model.getAll((err, data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.send(data);
  });
};

exports.getDetails = async (req, res) => {
  let id = req.params.id;
  model.getOne(id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.send(data);
  });
};

exports.addNew = async (req, res) => {
  model.create(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.send(data);
  });
};

exports.updateStatus = async (req, res) => {
  model.updateStatus(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.send(data);
  });
};
