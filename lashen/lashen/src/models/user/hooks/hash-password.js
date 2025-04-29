const { hash, genSalt } = require("bcrypt")

module.exports = function (userSchema) {
    userSchema.pre('save', async function (next) {
        if (this.isModified('password')) {
            let salt = await genSalt(8)
            this.password = await hash(this.password, salt)
        }
        next()
    })
};
