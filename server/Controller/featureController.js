const Feature = require("../Model/Feature");
const catchAsyncError = require("../middleware/catchAsyncError");

exports.getFeatureEarn = catchAsyncError(async (req, res) => {
  const data = await Feature.find();

  let totalAmount = 0;

  data.forEach((current) => {
    totalAmount += current.totalEarn;
  });
  
  res.json({totalAmount});
});
