const { Router } =require('express');
const feedbackController = require('../controllers/feedback.js');
const { auth } = require('../middleware/auth.js');

const router = Router();

router.post('/', feedbackController.createFeedback);
router.get('/', feedbackController.getAllFeedbacks);
router.get('/:id', feedbackController.getFeedbackById);

module.exports = router
