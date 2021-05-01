const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({

    firstusername: String,
    lastusername: String,
    email: String,
    phone: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;