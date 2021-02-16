const mongoose = require("mongoose");
const {model,Schema} = mongoose;

const testerSchema = new Schema({
  email,
  name,
  lastName,
  code,
})