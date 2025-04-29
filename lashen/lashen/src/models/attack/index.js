const { model } = require("mongoose");
const { ATTACK } = require("../../constants/models-names");
const attackSchema = require("./schemas/attack.js");



module.exports = model(ATTACK, attackSchema);