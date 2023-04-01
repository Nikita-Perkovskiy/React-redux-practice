const { Schema, model } = require("mongoose");

const products = new Schema({
  src: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  status: {
    type: String,
  },
  priceRetail: {
    type: Number,
    require: true,
  },
  priceSale: {
    type: Number,
  },
  currency: {
    type: String,
  },
});

module.exports = model("Products", products);
