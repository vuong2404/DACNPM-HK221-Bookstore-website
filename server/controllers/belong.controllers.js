const Belong = require("../models/belong.models");
var model = new Belong();

exports.getBelong = async (req, res) => {
  let id = req.params.id;
  model.getOne(id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(data);
  });
};