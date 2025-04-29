const feedbackService =  require('../services/feedback.js');
const asyncHandler = require('../utils/async-handler.js');
const { OK, CREATED } = require('../constants/status-codes.js');

const createFeedback = asyncHandler(async (req, res) => {
  const data = { ...req.body }; 
  const feedback = await feedbackService.createFeedback(data);
  res.status(CREATED).json(feedback);
});

const getAllFeedbacks = asyncHandler(async (req, res) => {
  const feedbacks = await feedbackService.getAllFeedbacks();
  res.status(OK).json(feedbacks);
});

const getFeedbackById = asyncHandler(async (req, res) => {
  const feedback = await feedbackService.getFeedbackById(req.params.id);
  res.status(OK).json(feedback);
});

module.exports =  {
  createFeedback,
  getAllFeedbacks,
  getFeedbackById
};
