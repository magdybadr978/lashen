const { Schema, model, Types } = require('mongoose');

const quizSchema = new Schema({
  title: { type: String, required: true },
  questions: [{
    questionText: { type: String, required: true },
    options: [{ type: String }],
    correctAnswer: { type: String, required: true }
  }],
}, { timestamps: true });

module.exports = quizSchema;
