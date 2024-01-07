const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
  name: {
    type: String,
    require,
  },
  email: {
    type: String,
    require,
  },
  message: {
    type: String,
    require,
  },
  status: {
    type: String,
    default: "Unread",
  },
});
const Contact = mongoose.model("contact", contactSchema);
module.exports = Contact;
