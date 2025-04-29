const { sign } = require("jsonwebtoken")

module.exports = function (options = {}) {
  let token = sign({ userId: this._id, role: this.role }, process.env.JWT_SECRET_KEY, options)
  return token
};