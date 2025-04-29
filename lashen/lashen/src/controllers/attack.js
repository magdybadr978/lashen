const attackService = require('./../services/attack');
const asyncHandler = require('./../utils/async-handler');
const { OK, CREATED } = require('./../constants/status-codes');

const createAttack = asyncHandler(async (req, res) => {
    const { body, user } = req;
    const attack = await attackService.createAttack(body);
    res.status(CREATED).json(attack);
});

const getAttacks = asyncHandler(async (req, res) => {
    const attacks = await attackService.getAttacks(req.query);
    res.status(OK).json(attacks);
});

const getAttackById = asyncHandler(async (req, res) => {
    const attack = await attackService.getAttackById(req.params.id);
    res.status(OK).json(attack);
});

const updateAttack = asyncHandler(async (req, res) => {
    const attack = await attackService.updateAttack(req.params.id, req.body);
    res.status(OK).json(attack);
});

const deleteAttack = asyncHandler(async (req, res) => {
    await attackService.deleteAttack(req.params.id);
    res.status(OK).json({ message: 'Attack deleted successfully' });
});

module.exports = {
    createAttack,
    getAttacks,
    getAttackById,
    updateAttack,
    deleteAttack
};
