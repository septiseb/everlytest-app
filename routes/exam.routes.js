const express = require("express");
const router = express.Router();
const Exam = require("../models/exam.model");
const Question = require("../models/question.model");
const GroupTest = require("../models/grouptest.model");
const Tester = require("../models/tester.model");
const nodemailer = require("nodemailer");
//FUCNTIONS
const printTheChart= (testerScore) =>{
  const ctx = document.getElementById('my-chart').getContext('2d');
  const testers = testerScore.map(test=>test.email);
  const grades =  testerScore.map(test=>test.grade ? test.grade : 0);

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels:  testers,
      datasets: [
        {
          label: 'Puntaje de Aplicantes',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: grades
        }
      ]
    }
  }); // closes chart = new Chart()

};


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

      let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'sebsepdus@gmail.com',
          pass: process.env.PASSWORD,
        }
      });

      transporter.sendMail({
        from: 'sebsepdus@gmail.com',
        to: testerEmail, 
        subject: "EverlyTest, solicita que contestes esta encuesta", 
        text: `Este es el código para entrar ${id}`,
        html: `<b>Este es el código para entrar ${id}</b>`
      })
      .then(info =>console.log(info))
      .catch(error => console.log(error));
      
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

  res.render("user/detail-test-user", { tester: testerGroupTest.sort((a,b)=>b.grade - a.grade)});

});

module.exports = router;
