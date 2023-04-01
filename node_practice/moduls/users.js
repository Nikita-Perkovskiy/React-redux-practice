const { Schema, model } = require("mongoose");

const users = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = model("Users", users);
