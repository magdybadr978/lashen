const { hash, genSalt } = require("bcrypt")

module.exports = function (userSchema) {
    userSchema.pre("findOneAndUpdate", async function (next) {
        if (this._update.password) {
            let salt = await genSalt(8)
            this._update.password = await hash(this._update.password, salt);
        }
        next();
    });
};