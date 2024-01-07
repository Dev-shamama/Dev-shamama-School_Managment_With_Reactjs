const express = require("express");
const router = express.Router();

const { isAuthenticatedAdmin } = require("../middleware/auth");
const {
  createQuestion,
  getQuestion,
  updateQuestion,
  deleteQuestion,
  getSingleQuestion,
  getSingleQuestionAnswer,
  getSingleAnswerUpdate,
  getSingleAnswerDelete,
  addSingleAnswer,
  statusQuestion,
} = require("../Controller/examPaperController");

// Question
router.post("/admin/question", isAuthenticatedAdmin, createQuestion);
router.get("/admin/getquestion", isAuthenticatedAdmin, getQuestion);
router.get("/admin/getsinglequestion/:id", isAuthenticatedAdmin, getSingleQuestion);
router.put("/admin/updatequestion/:id", isAuthenticatedAdmin, updateQuestion);
router.delete("/admin/deletequestion/:id", isAuthenticatedAdmin, deleteQuestion);
router.post("/admin/status/:id", isAuthenticatedAdmin, statusQuestion);


// Answer
router.post("/admin/addsingleanswer", isAuthenticatedAdmin, addSingleAnswer);
router.get("/admin/getsinglequestionanswer/:id", isAuthenticatedAdmin, getSingleQuestionAnswer);
router.put("/admin/getsingleanswerupdate/:id", isAuthenticatedAdmin, getSingleAnswerUpdate);
router.delete("/admin/getsingleanswerdelete", isAuthenticatedAdmin, getSingleAnswerDelete);




module.exports = router;
