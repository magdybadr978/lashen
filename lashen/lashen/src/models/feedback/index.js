const { model } = require("mongoose");
const { FEEDBACK } = require("../../constants/models-names.js");
const feedbackSchema = require("./schemas/feedback.js");

module.exports = model(FEEDBACK , feedbackSchema);