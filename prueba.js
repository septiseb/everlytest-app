const results = {
  "602bf35f34a4151170666ec3": "=A1*B1",
  "602bf35f34a4151170666ec4": "'3,1416'",
  "602bf35f34a4151170666ec5": "B$1",
  "602bf35f34a4151170666ec6": "Datos, palabras y números.",
};
const mongoose = require("mongoose");
const Question = require("./models/question.model");

/* const obtainResult = async () => {
  const topScore = Object.keys(results).length;
  for (let result in results) {
    const question = await Question.findById(result);
    console.log(question);
  }
}; */

//obtainResult();
Question.findById("602bf35f34a4151170666ec3").then(question=>console.log(question));