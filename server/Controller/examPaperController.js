const Exam = require("../Model/Exam");
const Marks = require("../Model/Marks");
const catchAsyncError = require("../middleware/catchAsyncError");

// Question Controller

// Create Question
exports.createQuestion = catchAsyncError(async (req, res) => {
  const { question, course } = req.body;
  const data = await Exam({
    question,
    course,
    status: "Active",
    answers: [],
  });

  const result = await data.save();

  // let answers = [];

  // if (typeof req.body.answers === "string") {
  //   answers.push(req.body.answers);
  // } else {
  //   answers = req.body.answers;
  // }

  // let saveAnswers = [];

  // for (let i = 0; i < answers.length; i++) {
  //   const element = answers[i];
  //   saveAnswers.push(element);
  // }

  // req.body.answers = saveAnswers;

  // // console.log(req.body.answers);

  // const data = await Exam.create(req.body);

  res.json({ success: true, data: result });
});

// Get Question
exports.getQuestion = catchAsyncError(async (req, res) => {
  const data = await Exam.find();
  res.json({ success: true, data });
});

// Get Single Question
exports.getSingleQuestion = catchAsyncError(async (req, res) => {
  const data = await Exam.findById(req.params.id);
  res.json({ success: true, data });
});

// Update Question
exports.updateQuestion = catchAsyncError(async (req, res) => {
  const data = await Exam.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({ data, success: true, message: "Question Update Successfully" });
});

// Delete Question
exports.deleteQuestion = catchAsyncError(async (req, res) => {
  const data = await Exam.findByIdAndRemove(req.params.id);
  res.json({ success: true, message: "Question Delete Successfully" });
});

// Status Question
exports.statusQuestion = catchAsyncError(async (req, res) => {
  const statusHandle = req.body.status;
  let updatestatus = "";

  statusHandle === "Active"
    ? (updatestatus = "Deactive")
    : (updatestatus = "Active");

  const updater = {
    status: updatestatus,
  };
  const data = await Exam.findByIdAndUpdate(req.params.id, updater, {
    new: true,
  });

  res.json({
    success: true,
    message: "Status Update Successfully",
    user: data,
  });
});

//
// Answer Controller
//

// Get Answer
exports.getSingleQuestionAnswer = catchAsyncError(async (req, res) => {
  const data = await Exam.findById(req.params.id);
  res.json({ success: true, data: data.answers });
});

// Add Single Answer
exports.addSingleAnswer = catchAsyncError(async (req, res) => {
  const { questionId, answer, correctAnswer } = req.body;
  const ans = { question_id: questionId, answer, correctAnswer };
  const question = await Exam.findById(questionId);
  question.answers.push(ans);
  const result = await question.save({ validateBeforeSave: false });
  res.json({ success: true, message: "Answer Add Successfully", data: result });
});

//  Update Answer Single
exports.getSingleAnswerUpdate = catchAsyncError(async (req, res) => {
  let data = await Exam.findById(req.params.id);
  let id = null;

  data.answers.map(async (item) => {
    if (Boolean(req.body.correctAnswer) === true) {
      item.correctAnswer = false;
    }

    if (item._id.toString() === req.body.ansId) {
      item.answer = req.body.answer;
      item.correctAnswer = req.body.correctAnswer;
      id = item._id;
    }
  });
  
  if (Boolean(req.body.correctAnswer) === true) {
    data.correctAnswer = id;
  }
  
  const result = await data.save();

  res.json({ success: true, result });
});

// Delete Answer Single
exports.getSingleAnswerDelete = catchAsyncError(async (req, res) => {
  let data = await Exam.findById(req.query.questionId);

  const output = data.answers.filter(
    (item) => item._id.toString() !== req.query.ansId
  );

  await Exam.findByIdAndUpdate(
    req.query.questionId,
    { answers: output },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    message: "Answer Delete Successfully",
    data: output,
  });
});

exports.statusMarks = catchAsyncError(async (req, res) => {
  const statusHandle = req.body.status;
  let updatestatus = "";

  statusHandle === "Active"
    ? (updatestatus = "Deactive")
    : (updatestatus = "Active");

  const updater = {
    status: updatestatus,
  };
  const data = await Marks.findByIdAndUpdate(req.params.id, updater, {
    new: true,
  });

  res.json({ success: true, data });
});
