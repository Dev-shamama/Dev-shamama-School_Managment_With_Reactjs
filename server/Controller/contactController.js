const catchAsyncError = require("../middleware/catchAsyncError");
const Contact = require("../Model/Contact");

exports.contactPost = catchAsyncError(async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.json({ success: false, message: "All Field is required" });
  }
  const data = new Contact({
    name,
    email,
    message,
  });
  const result = await data.save();
  res.json({ success: true, message: "Send Successfully", data: result });
});

exports.getContact = catchAsyncError(async (req, res) => {
  const data = await Contact.find();
  res.json({ success: true, message: "Send Successfully", data });
});

exports.statusContact = catchAsyncError(async (req, res) => {
  const statusHandle = req.body.status;
  let updatestatus = "";

  statusHandle === "Read" ? (updatestatus = "Unread") : (updatestatus = "Read");

  const updater = {
    status: updatestatus,
  };
  const data = await Contact.findByIdAndUpdate(req.params.id, updater, {
    new: true,
  });

  res.json({ success: true, data });
});

exports.deleteContact = catchAsyncError(async (req, res) => {
  const data = await Contact.findByIdAndRemove(req.params.id);
  res.json({ success: true, message: "Message Delete Successfully" });
});
