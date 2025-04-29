const authService = require("./../services/auth")
const { CREATED, OK } = require("./../constants/status-codes")
const asyncHandler = require("./../utils/async-handler")

const signUp = asyncHandler(async (req, res) => {
    const { body } = req
    const { locale } = req;
    let signUp = await authService.signUp(body, locale)
    res.status(CREATED).json(signUp);
})

const login = asyncHandler(async (req, res) => {
    const { body, locale } = req;
    const user = await authService.login(body, locale);
    res.status(OK).json(user);
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await authService.getUsers(req.query);
  res.status(OK).json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await authService.getUserById(id);
  res.status(OK).json(user);
});

const updateUser = asyncHandler(async (req, res) => {
  await authService.updateUser(req.params.id, req.body);
  res.status(OK).json({ message : 'User updated successfully'});
});


const deleteUser = asyncHandler(async (req, res) => {
  await authService.deleteUser(req.params.id);
  res.status(OK).json({ message: 'User deleted successfully' });
});



module.exports = {
    signUp,
    login,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}