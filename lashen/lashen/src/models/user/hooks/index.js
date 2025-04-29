module.exports = function (userSchema) {
    require("./hash-password")(userSchema);
    require("./hash-password-when-update.js")(userSchema)
};