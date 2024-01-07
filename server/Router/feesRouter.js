const express = require("express");
const router = express.Router();

const { isAuthenticatedAdmin, isAuthenticatedUser } = require("../middleware/auth");
const { feePaid, getFeePaid, totalEarnAmount } = require("../Controller/feesController");

// Used Students 
router.get("/user/:id", isAuthenticatedUser, getFeePaid);

// Used ADMIN
router.post("/admin/user/feepaid", isAuthenticatedAdmin, feePaid);
router.get("/admin/user/feepaid/:id", isAuthenticatedAdmin, getFeePaid);
router.get("/admin/user/fees", totalEarnAmount);

module.exports = router;
