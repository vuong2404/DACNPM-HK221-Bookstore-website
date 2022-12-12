const Cart = require("../models/cart.models");
var model = new Cart();

exports.getCart = async (req, res) => {
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

// exports.addToCart = async (req, res) => {
//   model.add(req.body, (err, data) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// };

// exports.updateCart = async (req, res) => {
//   let id = req.params.id;

//   model.update(id, req.body, (err, data) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//         res.status(200).send(data);
//     }
//   });
// };

// exports.deleteCartItem= async (req, res) => {
//   let id = req.params.id;

//   model.delete(id, (err, data) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//         res.status(200).send(data);
//     }
//   });
//};
