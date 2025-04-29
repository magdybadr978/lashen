const { Schema, model, Types } = require('mongoose');

const feedbackSchema = new Schema({
  user: { type: Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true }
});

module.exports = feedbackSchema;
