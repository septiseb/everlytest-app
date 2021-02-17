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

router.get("/tester/:idUser", async (req, res, next) => {
  const { idUser } = req.params;
  const userAndTest = await Tester.findById(idUser).populate({path:'code',populate:{path:'test',model:"Exam"}});
  res.render("tester/tester-exam",userAndTest);
});

module.exports = router;
