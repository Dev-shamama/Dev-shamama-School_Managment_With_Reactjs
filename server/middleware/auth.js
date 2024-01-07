const jwt = require("jsonwebtoken");
const catchAsyncError = require("./catchAsyncError");
const ErrorHandler = require("./errorHandler");
const User = require("../Model/User");
const Admin = require("../Model/Admin");

// User Authentication Check
exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decodedToken.id);
  next();
});

// Admin Authentication Check
exports.isAuthenticatedAdmin = catchAsyncError(async (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await Admin.findById(decodedToken.id);
  next();
});
