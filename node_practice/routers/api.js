const { Router } = require("express");
const path = require("node: path");
const api = Router();
const products = require("../mockData/products.json");
const { users } = require("../mockData/users.json");
const Product = require("../moduls/product");
const router = require("./users");

router.get("/api/users", (request, response) => {
  response.status(200).json({ success: true, data: users });
});

router.post("/api/users", (request, response) => {
  response.status(200).json({ success: true });
});

router.get("/api/products", (request, response) => {
  response.status(200).json({ success: true, data: products });
});

router.postt("/api/product", (request, response) => {
  response.status(200).json({ success: true });
});

module.exports = api;
