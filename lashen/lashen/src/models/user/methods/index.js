module.exports = function (userSchema) {
    userSchema.methods.generateAuthToken = require("./generate-token");
    require("./hide-sensitive-data")(userSchema)
};