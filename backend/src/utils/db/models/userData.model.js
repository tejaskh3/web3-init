const mongoose = require("mongoose");

const User = new mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

User.createCollection();
module.exports = User;
