const express = require("express");
const router = express.Router();
const Exam = require("../models/exam.model");
const Question = require("../models/question.model");
const GroupTest = require("../models/grouptest.model");

//Test for the General View
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

//Test for the Users to add their tests
router.get("/user-profile/create-test", (req, res, next) => {
  res.render("user/create-group-test");
});

router.post("/user-profile/create-test", async (req, res, next) => {
  const { name, namePosition, department, positionDescription } = req.body;
  const { _id } = req.session.currentUser;

  try {
    const createGroupTest = await GroupTest.create({
      name,
      namePosition,
      department,
      positionDescription,
      user: _id,
    });
    res.redirect(`/user-profile/create-test/${createGroupTest._id}`);
  } catch (e) {
    next(e);
  }
});

// Parametros

router.get("/tests/:id", async (req, res, next) => {
  const { id } = req.params;
  const oneExam = await Exam.findById(id).populate("questions");
  res.render("test-detail", { oneExam });
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
  const finalGrade =
    score / maxScore
      ? Number((score / maxScore).toFixed(1)) * 100 + "%"
      : "0% ";
  res.render("test-detail", { oneExam, finalGrade });
});

router.get("/user-profile/create-test/:id", async (req, res, next) => {
  const allTest = await Exam.find();
  const { id } = req.params;
  const groupTest = await GroupTest.findById(id);

  const missingTest = allTest.filter(
    (test) => !groupTest.test.includes(test._id)
  );
  const aggTest = allTest.filter((test) => groupTest.test.includes(test._id));

  res.render("user/choose-tests.hbs", { missingTest, groupTest, aggTest });
});

router.post("/user-profile/create-test/:id", async (req, res, next) => {
  const { id } = req.params;
  const { idTestAdd,idTestErase} = req.body;

  (idTestAdd) ? await GroupTest.findByIdAndUpdate(id, {
    $addToSet: { test: idTestAdd },
  }) : await GroupTest.findByIdAndUpdate(id, {
    $pull: { test: idTestErase },
  });

  res.redirect(`/user-profile/create-test/${id}`);
});

module.exports = router;
