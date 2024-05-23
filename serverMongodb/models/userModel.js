const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: String,
    age: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
