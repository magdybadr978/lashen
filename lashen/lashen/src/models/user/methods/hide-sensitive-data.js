module.exports = function (userSchema) {
    userSchema.methods.toJSON = function () {
      const user = this.toObject();
      delete user.password;
      delete user.__v;
      delete user.createdAt;
      delete user.updatedAt;
      delete user.otpData;
      return user;
    };
  };
  