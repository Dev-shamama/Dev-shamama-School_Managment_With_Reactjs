const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    require,
  },
  email: {
    type: String,
    require,
  },
  password: {
    type: String,
    require,
  },

  avatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
});

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();

  this.password = await bcrypt.hash(this.password, 10);
});

adminSchema.methods.comparePassword = async function (enteredPassword) {
  const isPassword = await bcrypt.compare(enteredPassword, this.password);
  return isPassword;
};


adminSchema.methods.jwtAuthToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
