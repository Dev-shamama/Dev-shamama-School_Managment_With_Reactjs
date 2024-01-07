const Exam = require("../Model/Exam");
const Marks = require("../Model/Marks");
const User = require("../Model/User");
const catchAsyncError = require("../middleware/catchAsyncError");
const sendJWT = require("../utils/jwtSend");
const cloudinary = require("cloudinary");

// USER LOGIN
exports.loginUser = catchAsyncError(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      message: "email and password is required",
    });
  }

  const user = await User.findOne({ email }).where("status", "Active");

  if (!user) {
    res.json({ success: false, message: "Invalid email and password" });
  }

  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    return res.json({ success: false, message: "Invalid email and password" });
  }

  sendJWT(user, 200, res);
});

// USER UPDATE
exports.updateUser = catchAsyncError(async (req, res) => {
  const updateData = {};

  if (req.body.avatar !== "") {
    const user = await User.findById(req.user.id);

    const imageId = user.avatar.public_id;

    await cloudinary.v2.uploader.destroy(imageId);
    const opts = {
      folder: "ischool",
      width: 150,
      crop: "scale",
      overwrite: true,
      invalidate: true,
      resource_type: "auto",
    };
    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, opts);

    updateData.avatar = {
      public_id: myCloud.public_id,
      url: myCloud.url,
    };
  }

  const data = await User.findByIdAndUpdate(req.user.id, updateData, {
    new: true,
  });
  res.json({ success: true, message: "Profile Update Successfully" });
});

// USER PROFILE
exports.userProfileDetail = catchAsyncError(async (req, res) => {
  const data = await User.findById(req.user.id);
  res.json({ success: true, data });
});

// USER LOGOUT
exports.logoutUser = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out Successfully",
  });
});

// USER PASSWORD UPDATE
exports.studentPasswordUpdate = catchAsyncError(async (req, res) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;

  if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
    return res.json({ succes: false, message: "All field is required" });
  }
  if (newPassword !== confirmPassword) {
    return res.json({
      succes: false,
      message: "new password not match confirm password",
    });
  }

  const user = await User.findById(req.user.id);

  const isPassword = await user.comparePassword(oldPassword);

  if (!isPassword) {
    return res.json({
      succes: false,
      message: "new password not match db password",
    });
  }
  user.password = newPassword;
  await user.save();

  res.status(200).json({
    success: true,
    message: "Password Update Successfully",
  });
});

// USER GET PASSWORD
exports.getExamPassword = catchAsyncError(async (req, res) => {
  // Generate Register Id
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const stdId = req.user.id;
  const result = await User.findByIdAndUpdate(
    stdId,
    { exampassword: getRndInteger(111111, 999999) },
    { new: true }
  );
  res.json({ success: true });
});

// USER LOGIN DURING EXAM
exports.loginExamPassword = catchAsyncError(async (req, res) => {
  const { email, password } = req.body;

  const ExistEmail = await User.find({ email: email });

  if (ExistEmail.length === 0) {
    return res.json({ success: false, message: "Email is not valid" });
  }

  if (ExistEmail[0].exampassword !== password) {
    return res.json({ success: false, message: "Password was wrong" });
  }

  await User.findByIdAndUpdate(
    req.user.id,
    { exampassword: "" },
    { new: true }
  );

  res.json({ success: true, message: "Welcome to Online Exam" });
});

// USER GET PAPER
exports.getPaper = catchAsyncError(async (req, res) => {
  const data = await Exam.find(req.params).where("status", "Active");
  res.json({ success: true, data });
});

// USER SUBMIT PAPER
exports.submitPaper = catchAsyncError(async (req, res) => {
  const { registerId, name, email, course, _id } = req.user;
  const getQuestionExam = await Exam.find();
  const receiveAnswer = req.body.checkid;

  let correctAnswers = [];
  let marks = 0;
  let grade = "";
  let year = new Date().getFullYear();
  let date = new Date().toLocaleDateString();

  for (const item in receiveAnswer) {
    const element = receiveAnswer[item];
    correctAnswers.push(element);
  }

  getQuestionExam.map((item, index) => {
    if (item.correctAnswer === correctAnswers[index]) {
      marks++;
    }
  });

  let percentage = (marks * 100) / correctAnswers.length;

  if (percentage <= 100 && percentage >= 80) {
    grade = "A+1";
  } else if (percentage <= 79 && percentage >= 70) {
    grade = "A";
  } else if (percentage <= 69 && percentage >= 60) {
    grade = "B";
  } else if (percentage <= 59 && percentage >= 50) {
    grade = "C";
  } else if (percentage <= 49 && percentage >= 40) {
    grade = "D";
  } else if (percentage <= 39 && percentage >= 33) {
    grade = "E";
  } else {
    grade = "FAIL";
  }

  const CreateOnMarksPaper = new Marks({
    registerId,
    userId: _id,
    name,
    email,
    course,
    totalquestion: correctAnswers.length,
    attempt: correctAnswers.length,
    correct: marks,
    percentage: percentage,
    grade: grade,
    year: year,
    date: date,
  });
  await CreateOnMarksPaper.save();

  res.redirect(`${process.env.BASE_URL}/student/success`);
});

// USER SINGLE MARKS
exports.getMarksSingle = catchAsyncError(async (req, res) => {
  const data = await Marks.find({ userId: req.user._id }).where(
    "status",
    "Active"
  );
  if (!data) {
    return res.json({ success: false, message: "some error occured" });
  }
  res.json({ success: true, data });
});
