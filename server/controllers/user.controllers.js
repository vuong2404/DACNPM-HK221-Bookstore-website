const User = require("../models/user.models");
var model = new User();

exports.getList = async (req, res) => {
  let user_id = req.params.user_id;
  console.log(user_id);
  model.getAll(user_id, (err, data) => {
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

exports.updateUser = async (req, res) => {
  let id = req.params.id;

  model.update(id, req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};
