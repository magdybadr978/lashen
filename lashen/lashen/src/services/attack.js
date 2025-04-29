const Attack = require('./../models/attack');
const { NotFoundError } = require('./../middleware/error');

const createAttack = async (data) => {
    const attack = await Attack.create(data);
    return attack;
};

const getAttacks = async (query) => {
    const { page = 1, limit = 10 } = query;
    return await Attack.paginate({}, { page, limit, populate: 'reportedBy' });
};

const getAttackById = async (id) => {
    const attack = await Attack.findById(id).populate('reportedBy');
    if (!attack) throw new NotFoundError('Attack not found');
    return attack;
};

const updateAttack = async (id, data) => {
    const attack = await Attack.findByIdAndUpdate(id, data, { new: true });
    if (!attack) throw new NotFoundError('Attack not found');
    return attack;
};

const deleteAttack = async (id) => {
    const attack = await Attack.findByIdAndDelete(id);
    if (!attack) throw new NotFoundError('Attack not found');
};

module.exports = {
    createAttack,
    getAttacks,
    getAttackById,
    updateAttack,
    deleteAttack
};
