const Feature = require("../Model/Feature");
const Fees = require("../Model/Fees");
const catchAsyncError = require("../middleware/catchAsyncError");

exports.feePaid = catchAsyncError(async (req, res) => {
  const { user, name, email, course, fees, date } = req.body;

  const data = await Fees({
    user,
    name,
    email,
    course,
    fees,
    date,
  });

  const earn = await Feature({
    totalEarn: fees,
  });
  await earn.save();

  const result = await data.save();
  res.json({ success: true, data: result });
});

exports.getFeePaid = catchAsyncError(async (req, res) => {
  const data = await Fees.find({ user: req.params.id });
  res.json({ success: true, data });
});

exports.totalEarnAmount = catchAsyncError(async (req, res) => {
  const data = await Fees.find({ user });
  res.json({ data });
});
