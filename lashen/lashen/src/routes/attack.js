const router = require('express').Router();
const attackController = require('./../controllers/attack');
const { auth } = require('./../middleware/auth');

router.post('/', attackController.createAttack);

router.get('/', attackController.getAttacks);

router.get('/:id', attackController.getAttackById);

router.put('/:id', attackController.updateAttack);

router.delete('/:id', attackController.deleteAttack);

module.exports = router;
