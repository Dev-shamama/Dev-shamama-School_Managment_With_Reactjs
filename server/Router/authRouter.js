const express = require("express");
const router = express.Router();
const {
  loginUser,
  updateUser,
  userProfileDetail,
  logoutUser,
  studentPasswordUpdate,
  getExamPassword,
  loginExamPassword,
  getPaper,
  submitPaper,
  getMarksSingle,
} = require("../Controller/authController");
const { isAuthenticatedUser } = require("../middleware/auth");

router.post("/user/login", loginUser);
router.put("/user/profile/update", isAuthenticatedUser, updateUser);
router.get("/user/me", isAuthenticatedUser, userProfileDetail);
router.get("/user/logout", isAuthenticatedUser, logoutUser);
router.post("/user/password/update", isAuthenticatedUser, studentPasswordUpdate);
router.get("/user/getexampassword", isAuthenticatedUser, getExamPassword);
router.post("/user/loginexampassword", isAuthenticatedUser, loginExamPassword);

// Exam Paper
router.get("/user/getpaper/:course", isAuthenticatedUser, getPaper);
router.post("/user/submitpaper", isAuthenticatedUser, submitPaper);

// Marks
router.get("/user/getmarkssingle", isAuthenticatedUser, getMarksSingle);




module.exports = router;
