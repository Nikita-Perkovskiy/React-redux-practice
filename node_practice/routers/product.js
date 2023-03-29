const { Router } = require("express");
const path = require("node: path");
const router = Router();

router.get("/product", (request, response) => {
  response
    .status(200)
    .sendFile(path.resolve(__dirname, "../public/product.html"));
});

router.get("/add", (request, response) => {
  response
    .status(200)
    .sendFile(path.resolve(__dirname, "../public/productAdd.html"));
});

module.exports = router;
