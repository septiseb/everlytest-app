const express = require("express");
const router = express.Router();
const Exam = require("../models/exam.model");

router.get("/tests", async (req, res, next) => {
  const allTest = await Exam.find();
  res.render("tests-display", { tests: allTest });
});

router.post("/tests", async (req, res, next) => {
  const {position} = req.body;
  const allTest = await Exam.find();
  const filterTest = allTest.filter((test) => {
    const strLower= test.position.map(str=>str.toLowerCase());
    return strLower.includes(position.toLowerCase());
  });
  (filterTest.length>0) ? res.render("tests-display", { tests: filterTest}) : res.render("tests-display", { tests: allTest});
  
});


module.exports = router;
