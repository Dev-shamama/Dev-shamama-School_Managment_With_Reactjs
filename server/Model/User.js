const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  registerId: {
    type: Number,
  },
  name: {
    type: String,
    require,
  },
  email: {
    type: String,
    require,
  },
  gender: {
    type: String,
    require,
  },
  password: {
    type: String,
    require,
  },
  exampassword: {
    type: String,
    default: "",
  },
  course: {
    type: String,
    require,
  },
  status: {
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
  createAt: {
    type: String,
    require,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.jwtAuthToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

userSchema.methods.comparePassword = async function (enteredPassword) {
  const isPassword = await bcrypt.compare(enteredPassword, this.password);
  return isPassword;
};

// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = async function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and Adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("user", userSchema);
module.exports = User;
