const Book = require("../models/book.models");
var model = new Book();

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

exports.getBook = async (req, res) => {
  let id = req.params.id;
  model.getOne(id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(data);
  });
};

exports.getSearch = async (req, res) => {
  let params = req.query ;
  model.getWord(params, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
        res.status(200).send(data);
    }
  });
};

exports.addBook = async (req, res) => {
  model.create(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

exports.updateBook = async (req, res) => {
  let id = req.params.id;
  model.update(id, req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
        res.status(200).send(data);
    }
  });
};

exports.deleteBook = async (req, res) => {
  let id = req.params.id;

  model.delete(id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
        res.status(200).send(data);
    }
  });
};
