const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema({
  totalEarn: {
    type: Number,
    require,
  },
});

const Feature = mongoose.model("feature", featureSchema);
module.exports = Feature;
