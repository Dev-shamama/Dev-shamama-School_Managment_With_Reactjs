const express = require("express");
const router = express.Router();

const { visitor, getVisitor } = require("../Controller/visitorController");

router.post("/admin/visitor", visitor);
router.get("/admin/getvisitor", getVisitor);

module.exports = router;
