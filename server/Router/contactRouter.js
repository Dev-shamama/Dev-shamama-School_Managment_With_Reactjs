const express = require("express");
const router = express.Router();
const  { contactPost, getContact, statusContact, deleteContact } = require("../Controller/contactController");
const { isAuthenticatedAdmin } = require("../middleware/auth");

router.post("/viewer/contact", contactPost);
// router.get("/viewer/getcontact", isAuthenticatedAdmin, getContact);
router.get("/viewer/getcontact", getContact);
router.post("/viewer/status/getcontact/:id", isAuthenticatedAdmin, statusContact);
router.delete("/viewer/deletecontact/:id", isAuthenticatedAdmin, deleteContact);

module.exports = router;
