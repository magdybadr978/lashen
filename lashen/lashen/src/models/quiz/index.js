const { model } = require("mongoose");
const { QUIZ } = require("../../constants/models-names.js");
const quizSchema = require("./schemas/quiz.js");

module.exports = model(QUIZ , quizSchema);