const { Router } = require("express");
const path = require("node: path");
const router = Router();

router.get("/register", (request, response) => {
  response
    .status(200)
    .sendFile(path.resolve(__dirname, "../public/register.html"));
});

module.exports = router;
