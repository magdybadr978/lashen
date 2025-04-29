const { model } = require("mongoose");
const { USER } = require("../../constants/models-names");
const userSchema = require("./schemas/user");


require("./hooks")(userSchema);
require("./methods")(userSchema);

module.exports = model(USER, userSchema);