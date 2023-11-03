const mongoose = require("mongoose");

const supplySchema = new mongoose.Schema(
  {

    name: {
      type: String,
    },

    amount: {
      type: String,
    },

  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Supply", supplySchema);
