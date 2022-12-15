const Address = require("../models/Address.models");
var model = new Address();

exports.getList = async (req, res) => {
  let user_id = req.params.user_id;
  console.log(user_id)
  model.getAll(user_id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
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

exports.updateAddress = async (req, res) => {
  let id = req.params.id;

  model.update(id, req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
        res.status(200).send(data);
    }
  });
};

exports.deleteAddress = async (req, res) => {
  let id = req.params.id;

  model.delete(id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
        res.status(200).send(data);
    }
  });
};
