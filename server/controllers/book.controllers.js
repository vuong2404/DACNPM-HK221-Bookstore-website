const Book = require("../models/book.models");
var model = new Book();

exports.getList = async (req, res) => {
  console.log("ihi");
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


exports.searchBooks = async (req, res) => {
  console.log("haha");
  model.getBooks(req.body, (err, data) => {
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
  console.log(req.body);
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
