const mongoose = require("mongoose");

const feesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
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
  fees: {
    type: Number,
    require,
  },
  date: {
    type: String,
    require,
  },
});

const Fees = mongoose.model("Fee", feesSchema);
module.exports = Fees;
