const Order = require("../models/order.models");
var model = new Order();

exports.getList = async (req, res) => {
  let params = req.query ;
  model.getAll(params, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
        res.status(200).send(data);
    }
  });
};

exports.getDetails = async (req, res) => {
  let id = req.params.id;
  model.getOne(id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(data);
  });
};

exports.addNew = async (req, res) => {
  model.create(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

exports.updateStatus = async (req, res) => {
  model.updateStatus(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
        res.status(200).send(data);
    }
  });
};
