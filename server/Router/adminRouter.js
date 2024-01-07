const express = require("express");
const router = express.Router();
const { isAuthenticatedAdmin } = require("../middleware/auth");
const {
  createAdmin,
  loginAdmin,
  adminProfileDetail,
  createUser,
  deleteUser,
  getSingleUser,
  getAllUser,
  logoutAdmin,
  statusUser,
  adminPasswordUpdate,
  adminProfileUpdate,
  userProfileUpdate,
  getMarks,
  getMarksSingleStudent,
} = require("../Controller/adminController");
const { statusMarks } = require("../Controller/examPaperController");

// Admin API
router.post("/admin/register", createAdmin);
router.post("/admin/login", loginAdmin);
router.get("/admin/me", isAuthenticatedAdmin, adminProfileDetail);
router.post(
  "/admin/password/update",
  isAuthenticatedAdmin,
  adminPasswordUpdate
);
router.get("/admin/logout", isAuthenticatedAdmin, logoutAdmin);
router.post("/admin/profile/update", isAuthenticatedAdmin, adminProfileUpdate);

// Marks API
router.get("/admin/getmarks", isAuthenticatedAdmin, getMarks);
router.get("/admin/getmarks/:id", isAuthenticatedAdmin, getMarksSingleStudent);
router.post("/admin/marks/status/:id", isAuthenticatedAdmin, statusMarks);



// User API
router.post("/admin/user/register", isAuthenticatedAdmin, createUser);
router.get("/admin/user", isAuthenticatedAdmin, getAllUser);
router.get("/admin/user/:id", isAuthenticatedAdmin, getSingleUser);
router.post("/admin/user/status/:id", isAuthenticatedAdmin, statusUser);
router.delete("/admin/user/:id", isAuthenticatedAdmin, deleteUser);
router.post(
  "/admin/user/profile/update/:id",
  isAuthenticatedAdmin,
  userProfileUpdate
);

module.exports = router;
