const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  question: {
    type: String,
    require,
  },
  course: {
    type: String,
    require,
  },
  status: {
    type: String,
    default: "Active",
  },
  correctAnswer: {
    type: String,
    default: "",
  },
  answers: [
    {
      question_id: {
        type: String,
        require,
      },
      answer: {
        type: String,
        require,
      },
      correctAnswer: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

const Exam = mongoose.model("Exam", examSchema);
module.exports = Exam;
