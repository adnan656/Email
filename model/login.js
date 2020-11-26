const mongoose = require("mongoose");

const Login = mongoose.model("Login", {

    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      required: true
    }
  });
  
module.exports = Login
