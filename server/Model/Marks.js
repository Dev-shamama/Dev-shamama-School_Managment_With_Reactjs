const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema({
  registerId: {
    type: Number,
    require,
  },
  userId: {
    type: String,
    require,
  },
  name: {
    type: String,
    require,
  },
  email: {
    type: String,
    require,
  },
  course: {
    type: String,
    require,
  },
  totalquestion: {
    type: Number,
    require,
  },
  attempt: {
    type: Number,
    require,
  },
  correct: {
    type: Number,
    require,
  },
  percentage: {
    type: Number,
    require,
  },
  grade: {
    type: String,
    require,
  },
  status: {
    type: String,
    default: "Active",
  },
  year: {
    type: String,
    require,
  },
  date: {
    type: String,
    require,
  },
});

const Marks = mongoose.model("mark", marksSchema);
module.exports = Marks;
