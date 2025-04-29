const User = require("./../models/user")
const bcrypt = require('bcrypt');
const { checkPhoneExists } = require("./../helper/checkExistence")
const { BadRequestError, NotFoundError } = require("./../middleware/error")
const { phoneNotFound,inValidPassword } = require("./../constants/messages")


const   signUp = async (body, locale) => {
    await checkPhoneExists(body.phone, locale)
    let user = await User.create(body);
    return {
        user
    }
}

const login = async (body, locale) => {
    const { phone, password } = body;
    const user = await User.findOne({ phone })
    if (!user) throw new BadRequestError(phoneNotFound[locale]);

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new BadRequestError(inValidPassword[locale]);

    return { user, token: user.generateAuthToken() };
};

const getUsers = async (query) => {
  const { page = 1, limit = 10 } = query;
  return await User.paginate({}, { page, limit });
};

const getUserById = async (id) => {
  const user = await User.findById(id).populate(['attacks', 'quizzes']);
  if (!user) throw new NotFoundError('User not found');
  return user;
};

const updateUser = async (id, data) => {
  const updated = await User.findByIdAndUpdate(id, data, { new: true });
  if (!updated) throw new NotFoundError('User not found');
  return updated;
};

const deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);
  if (!user) throw new NotFoundError('User not found');
};

module.exports = {
    signUp,
    login,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}