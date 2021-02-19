const express = require("express");
const router = express.Router();
const Exam = require("../models/exam.model");
const Question = require("../models/question.model");
const GroupTest = require("../models/grouptest.model");
const Tester = require("../models/tester.model");
const nodemailer = require("nodemailer");
//FUCNTIONS
async function main() {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: smtp - mail.outlook.com,
    port: 587,
    secure: false,
    auth: {
      user: "sebsepdus@hotmail.com",
      pass: "Changua@2020.",
    },
  });

  let info = await transporter.sendMail({
    from: "sebsepdus@hotmail.com", // sender address
    to: "arum_15@hotmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Message sent: %s", info.messageId);
}

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

router.post("/logout", (req, res, next) => {
  req.session.destroy();
  res.redirect("/");
});
//////////////////////////////////////////////////////////////////////////////
//////////////////////// Parametros///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

router.get("/tests/:id", async (req, res, next) => {
  const { id } = req.params;
  const oneExam = await Exam.findById(id).populate("questions");
  res.render("test-detail", { oneExam });
});

router.post("/tests/:id", async (req, res, next) => {
  const results = req.body;
  const { id } = req.params;
  const oneExam = await Exam.findById(id).populate("questions");

  let maxScore = oneExam.questions.length;
  let score = 0;
  for (let result in results) {
    const findQuestion = await Question.findById(result);
    if (findQuestion.answer === results[result]) {
      score++;
    }
  }
  const finalGrade =
    score / maxScore
      ? Number((score / maxScore).toFixed(2)) * 100 + "%"
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
  const { idTestAdd, idTestErase, testerEmail } = req.body;
  const checkTester = await Tester.find({ code: id });
  const emailTesterDB = checkTester.map((t) => t.email);

  idTestAdd
    ? await GroupTest.findByIdAndUpdate(id, {
        $addToSet: { test: idTestAdd },
      })
    : await GroupTest.findByIdAndUpdate(id, {
        $pullAll: { test: [idTestErase] },
      });

  if (!testerEmail) {
    return res.redirect(`/user-profile/create-test/${id}`);
  } else if(!emailTesterDB.some((email) => email == testerEmail)){
      const TesterCreate = await Tester.create({
        email: testerEmail,
        code: id,
      });
      const idTester = TesterCreate._id;
      const updateTester = await GroupTest.findByIdAndUpdate(
        id,
        { $addToSet: { testerEmail: idTester } },
        { new: true }
      );
    }
  
  res.redirect(`/user-profile/create-test/${id}`);
});

router.post("/delete-group-test/:idGroupTest", async (req, res, next) => {
  const { idGroupTest } = req.params;
  await GroupTest.findByIdAndDelete(idGroupTest);
  res.redirect("/user-profile");
});

router.get("/user-profile/details/:idGroupTest", async (req, res, next) => {
  const { idGroupTest } = req.params;

  const testerGroupTest = await Tester.find({ code: idGroupTest });

  res.render("user/detail-test-user", { tester: testerGroupTest });
});

module.exports = router;
