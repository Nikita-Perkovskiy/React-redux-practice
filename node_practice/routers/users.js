const { Router } = require("express");
const path = require("node: path");
const router = Router();

router.get("/product", (request, response) => {
  response.status(200).json({ success: true, data: users });
});

module.exports = router;
