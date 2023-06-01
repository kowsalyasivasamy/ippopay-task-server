const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter user name"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
    minimalStepCount: {
      type: Number,
      required: [true, "Please enter step counts"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
