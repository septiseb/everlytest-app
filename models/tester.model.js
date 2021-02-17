const mongoose = require("mongoose");
const {model,Schema} = mongoose;

const testerSchema = new Schema({
  email:String,
  name:String,
  lastName:String,
  code:{type:Schema.Types.ObjectId, ref:"GroupTest"},
});

module.exports = model("Tester",testerSchema);