const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  totalVisitor: {
    type: Number,
    require,
  },
  date: {
    type: Date,
    default: Date.now(),
  }
});

const Visitor = mongoose.model("visitor", visitorSchema);
module.exports = Visitor;