const Quiz =require('../models/quiz');
const { NotFoundError } =  require('../middleware/error.js');

const createQuiz = async (data) => {
  const quiz = await Quiz.create(data);
  return quiz;
};

const getAllQuizzes = async () => {
  return await Quiz.find({});
};

const getQuizById = async (id) => {
  const quiz = await Quiz.findById(id);
  if (!quiz) throw new NotFoundError('Quiz not found');
  return quiz;
};

const updateQuiz = async (id, data) => {
  const quiz = await Quiz.findByIdAndUpdate(id, data, { new: true });
  if (!quiz) throw new NotFoundError('Quiz not found');
  return quiz;
};

const deleteQuiz = async (id) => {
  const quiz = await Quiz.findByIdAndDelete(id);
  if (!quiz) throw new NotFoundError('Quiz not found');
  return;
};

module.exports =  {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuiz,
  deleteQuiz
};
