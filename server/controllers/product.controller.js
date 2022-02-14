const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((allProducts) => {
      console.log({ allProducts });
      res.json({ allProducts });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ err });
    });
};

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json({ err }));
};
