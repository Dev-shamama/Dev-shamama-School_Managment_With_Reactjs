const Admin = require("../Model/Admin");
const Marks = require("../Model/Marks");
const User = require("../Model/User");
const catchAsyncError = require("../middleware/catchAsyncError");
const sendJWTAdmin = require("../utils/jwtSendAdmin");
const cloudinary = require("cloudinary");

exports.createAdmin = catchAsyncError(async (req, res) => {
  const { name, email, password, avatar } = req.body;

  const ExistAdmin = await Admin.findOne({ email });

  // Check Condition Admin Exist Or Not
  if (ExistAdmin) {
    return res.json({ msg: "Already Exists" });
  }

  const data = await Admin({
    name,
    email,
    password,
    avatar: {
      public_id: "sample",
      url: "sample",
    },
  });

  const result = await data.save();
  res.json({ success: true, result });
});

exports.loginAdmin = catchAsyncError(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      message: "email and password is required",
    });
  }

  const admin = await Admin.findOne({ email });
  if (!admin) return res.json({ success: false, message: "Invalid Credential" });

  const isPasswordMatch = await admin.comparePassword(password);
  if (!isPasswordMatch)
    return res.json({ success: false, message: "Invalid Credential" });

  sendJWTAdmin(admin, 200, res);
});

exports.adminProfileDetail = catchAsyncError(async (req, res) => {
  const userData = await Admin.findById(req.user.id);
  res.status(200).json({
    success: true,
    user: userData,
  });
});

exports.adminPasswordUpdate = catchAsyncError(async (req, res) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;
  if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
    return res.json({ success: false, message: "all field is required" });
  }
  if (newPassword !== confirmPassword) {
    return res.json({
      success: false,
      message: "new password not match confirm password",
    });
  }

  const admin = await Admin.findById(req.user.id);

  const isPassword = await admin.comparePassword(oldPassword);

  if (!isPassword) {
    return res.json({
      succes: false,
      message: "new password not match db password",
    });
  }
  admin.password = newPassword;
  await admin.save();

  res.status(200).json({
    success: true,
    message: "Password Update Successfully",
  });
});

exports.logoutAdmin = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out Successfully",
  });
});

exports.adminProfileUpdate = catchAsyncError(async (req, res, next) => {

  const updateData = {
    name: req.user.name,
    email: req.user.email,
  };

  if (req.body.avatar !== "") {
    const admin = await Admin.findById(req.user.id);

    const imageId = admin.avatar.public_id;

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

  const data = await Admin.findByIdAndUpdate(req.user.id, updateData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Profile Update Successfully",
    data,
  });
});

/////////////////////////////////////
// Admin User Controller
/////////////////////////////////////

exports.createUser = catchAsyncError(async (req, res) => {
  const { name, email, gender, course, date, password } = req.body;

  const ExistStudents = await User.findOne({ email });

  // Check Condition User Exist Or Not
  if (ExistStudents) {
    return res.json({ msg: "already exists" });
  }

  // Generate Register Id
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const data = await User({
    registerId: getRndInteger(111111, 999999),
    name,
    email,
    gender,
    course,
    createAt: date,
    password,
    status: "Active",
    avatar: {
      public_id: "sample",
      url: "sample",
    },
  });

  const result = await data.save();
  res.json({ success: true, user: result });
});

exports.getAllUser = catchAsyncError(async (req, res) => {
  const totalUser = await User.countDocuments();
  const data = await User.find();
  res.json({ success: true, user: data, totalUser });
});

exports.getSingleUser = catchAsyncError(async (req, res) => {
  const data = await User.findById(req.params.id);
  res.json({ success: true, user: data });
});

exports.deleteUser = catchAsyncError(async (req, res) => {
  const data = await User.findByIdAndRemove(req.params.id);
  res.json({ success: true, user: data });
});

exports.statusUser = catchAsyncError(async (req, res) => {
  const statusHandle = req.body.status;
  let updatestatus = "";

  statusHandle === "Active"
    ? (updatestatus = "Deactive")
    : (updatestatus = "Active");

  const updater = {
    status: updatestatus,
  };
  const data = await User.findByIdAndUpdate(req.params.id, updater, {
    new: true,
  });

  res.json({ success: true, user: data });
});

exports.userProfileUpdate = catchAsyncError(async (req, res, next) => {
  const { name, email, gender, course, date } = req.body;

  const updateData = {
    name,
    email,
    gender,
    course,
    date,
  };

  if (req.body.avatar !== "") {
    const user = await User.findById(req.params.id);

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

  const data = await User.findByIdAndUpdate(req.params.id, updateData, {
    new: true,
  });

  res.status(200).json({
    success: true,
    message: "Profile Update Successfully",
    data,
  });
});


// USER MULTI MARKS
exports.getMarks = catchAsyncError(async (req, res) => {
  const data = await Marks.find()
  res.json({success: true, data});
});

// USER SINGLE MARKS
exports.getMarksSingleStudent = catchAsyncError(async (req, res) => {
  const data = await Marks.findById(req.params.id)
  res.json({success: true, data});
});


