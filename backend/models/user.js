const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    govIdType: {
      type: String,
    },
    govId: {
      type: String,
      required: true,
    },
    guardianLabel: {
      type: String,
    },
    guardianName: {
      type: String,
    },
    email: {
      type: String,
    },
    contact: {
      type: String,
    },
    address: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    pincode: {
      type: String,
    },
    occupation: {
      type: String,
    },
    religion: {
      type: String,
    },
    materialStatus: {
      type: String,
    },
    bloodGroup: {
      type: String,
    },
    nationality: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
