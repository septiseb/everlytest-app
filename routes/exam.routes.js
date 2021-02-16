const express = require("express");
const router = express.Router();
const Exam = require("../models/exam.model");
const Question = require("../models/question.model");

router.get("/tests", async (req, res, next) => {
  const allTest = await Exam.find();
  res.render("tests-display", { tests: allTest });
});

router.post("/tests", async (req, res, next) => {
  const { position } = req.body;
  const allTest = await Exam.find();
  console.log(allTest);
  const filterTest = allTest.filter((test) => {
    const strLower = test.position.map((str) => str.toLowerCase());
    return strLower.includes(position.toLowerCase());
  });
  filterTest.length > 0
    ? res.render("tests-display", { tests: filterTest })
    : res.render("tests-display", { tests: allTest });
});

router.get("/tests/:id", async (req, res, next) => {
  const { id } = req.params;
  const oneExam = await Exam.findById(id).populate("questions");
  res.render("test-detail", {oneExam});
});

router.post("/tests/:id", async (req, res, next) => {
  const results = req.body;
  const { id } = req.params;
  const oneExam = await Exam.findById(id).populate("questions");

  let maxScore = Object.keys(results).length;
  let score = 0;
  for (let result in results) {
    const findQuestion = await Question.findById(result);
    if (findQuestion.answer === results[result]) {
      score++;
    }
  }
  const finalGrade = (score/maxScore) ? Number((score/maxScore).toFixed(1))*100+"%" : "0% ";
  res.render("test-detail",{oneExam,finalGrade});
});


module.exports = router;
