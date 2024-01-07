const express = require("express");
const router = express.Router();

const { isAuthenticatedAdmin } = require("../middleware/auth");
const { getFeatureEarn } = require("../Controller/featureController");

router.get("/admin/featureearn", isAuthenticatedAdmin, getFeatureEarn);

module.exports = router;
