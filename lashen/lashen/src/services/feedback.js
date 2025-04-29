const Feedback = require('../models/feedback') ;
const { NotFoundError } = require('../middleware/error.js');

const createFeedback = async (data) => {
  const feedback = await Feedback.create(data);
  return feedback;
};

const getAllFeedbacks = async () => {
  return await Feedback.find({})
};

const getFeedbackById = async (id) => {
  const feedback = await Feedback.findById(id)
  if (!feedback) throw new NotFoundError('Feedback not found');
  return feedback;
};

module.exports = {
  createFeedback,
  getAllFeedbacks,
  getFeedbackById
};
