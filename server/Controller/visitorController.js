const Visitor = require("../Model/Visitor");
const catchAsyncError = require("../middleware/catchAsyncError");

exports.visitor = catchAsyncError(async (req, res) => {
  const visitor = await Visitor.findOne();

  let data = null;

  if (visitor === null) {
    const dataCreate = Visitor({
      totalVisitor: 1,
    });
    data = await dataCreate.save();
  } else {
    visitor.totalVisitor += 1;
    data = await visitor.save();
  }

  res.json({ visitor });
});

exports.getVisitor = catchAsyncError(async (req, res) => {
  const data = await Visitor.find();
  res.json({ data });
});
