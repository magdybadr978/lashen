const quizService = require('../services/quiz.js');
const { OK, CREATED } = require('../constants/status-codes.js');
const asyncHandler =require('../utils/async-handler.js');

const createQuiz = asyncHandler(async (req, res) => {
  const quiz = await quizService.createQuiz(req.body);
  res.status(CREATED).json(quiz);
});

const getAllQuizzes = asyncHandler(async (req, res) => {
  const quizzes = await quizService.getAllQuizzes();
  res.status(OK).json(quizzes);
});

const getQuizById = asyncHandler(async (req, res) => {
  const quiz = await quizService.getQuizById(req.params.id);
  res.status(OK).json(quiz);
});

const updateQuiz = asyncHandler(async (req, res) => {
  const quiz = await quizService.updateQuiz(req.params.id, req.body);
  res.status(OK).json(quiz);
});

const deleteQuiz = asyncHandler(async (req, res) => {
  await quizService.deleteQuiz(req.params.id);
  res.status(OK).json({ message: 'Quiz deleted successfully' });
});

module.exports = {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuiz,
  deleteQuiz
};
