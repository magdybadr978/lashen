const { Router } = require('express');
const quizController = require('../controllers/quiz.js');
const { auth } =  require('../middleware/auth.js');

const router = Router();

router.post('/', quizController.createQuiz);
router.get('/', quizController.getAllQuizzes);
router.get('/:id', quizController.getQuizById);
router.put('/:id', quizController.updateQuiz);
router.delete('/:id', quizController.deleteQuiz);

module.exports = router;
