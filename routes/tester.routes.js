const express = require("express");
const router = express.Router();
const Exam = require("../models/exam.model");
const Question = require("../models/question.model");
const GroupTest = require("../models/grouptest.model");
const Tester = require("../models/tester.model");

router.get("/login-tester", (req, res, next) => {
  res.render("tester/login-tester");
});

router.post("/login-tester", async (req, res, next) => {
  const { email, code } = req.body;
  const testerFind = await Tester.find({ email: email.toLowerCase() });
  const emailTest = testerFind.length > 0 ? testerFind[0].email : false;
  if (emailTest) {
    //IT COULD BE A PROBLEM LATER
    if (testerFind.filter((test) => test.code == code).length > 0) {
      const userForTest = testerFind.filter((test) => test.code == code)[0];
      res.redirect(`/tester/${userForTest.id}`);
    } else {
      res.render("tester/login-tester", {
        errorMessage: "No coincide el código",
      });
    }
  } else {
    res.render("tester/login-tester", {
      errorMessage: "El correo no fue encontrado",
    });
  }
});

router.get("/tester/:idTester", async (req, res, next) => {
  const { idTester } = req.params;
  const userAndTest = await Tester.findById(idTester).populate({path:'code',populate:{path:'test',model:"Exam"}}).populate({path:'code',populate:{path:'user',model:"User"}});
  res.render("tester/tester-exam",userAndTest);
});


router.get("/tester/:idTester/:idTest",async(req,res,next)=>{
  const {idTester,idTest} = req.params;
  const findTestQuestions = await GroupTest.findById(idTest).populate({path:"test",populate:{path:"questions",model:"Question"}});
  const questions = [];
  findTestQuestions.test.forEach(question=>question.questions.forEach(qst=>questions.push(qst)));
  res.render("tester/exam-form",{questions,idTester,idTest});
});

router.post("/tester/:idTester/:idTest",async(req,res,next)=>{
  const {idTester,idTest} = req.params;
  const maxScore = Number(Object.assign(req.body.numberQuestions));
  const results = Object.assign(req.body);
  delete results.numberQuestions;

  let score= 0;

  for (let result in results) {
    const findQuestion = await Question.findById(result);
    if (findQuestion.answer === results[result]) {
      score++;
    }
  }

  const finalGrade = (score / maxScore) ? Number((score / maxScore).toFixed(2)) * 100  : 0;

  const testerUpdate= await Tester.findByIdAndUpdate(idTester,{grade:finalGrade,answerTest:true},{new:true});

res.redirect(`/tester/${idTester}`);
})



module.exports = router;
