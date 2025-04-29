const jwt = require('jsonwebtoken');
const { ForbiddenError, UnauthorizedError } = require("./error");
const User = require("../models/user");

module.exports.auth = function (_permittedRoles) {

  const permittedRoles = [..._permittedRoles];
  return async (req, res, next) => {
    try {
      const token = extractTokenBasedOnRequestPlatform(req);
      if (!token) throw new UnauthorizedError("token not provided");
      const decodedToken = verifyAndDecodeToken(token);
      const isPermitted = await isUserRolePermitted(decodedToken.userId, permittedRoles);
      if (isPermitted) {
        req.userId = decodedToken.userId || null;
        req.role = decodedToken.role || null
        next();
      }
      else {
        throw new ForbiddenError("forbidden");
      }
    } catch (err) {
      next(err);
    }
  };
};

module.exports.anonymasAuth = function (_permittedRoles) {

  return async (req, res, next) => {
    try {
      const token = extractTokenBasedOnRequestPlatform(req);
      if (token) {
        const permittedRoles = [..._permittedRoles];
        const decodedToken = verifyAndDecodeToken(token);
        const isPermitted = await isUserRolePermitted(decodedToken.userId, permittedRoles);
        if (isPermitted) {
          req.userId = decodedToken.userId || null;
          req.role = decodedToken.role || null
          next();
        }
      }
      else {
        next();
      }
    } catch (err) {
      next(err);
    }
  };
}


function extractTokenBasedOnRequestPlatform(req) {
  if (req.headers.authorization) return req.headers.authorization.split(' ')[1];
  return null;
}

function verifyAndDecodeToken(token) {
  try {
    let decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decodedToken) throw new ForbiddenError("forbidden");

    return decodedToken;
  } catch (err) {
    if (err.name == 'TokenExpiredError') throw new UnauthorizedError("Token Expired")
    throw new ForbiddenError("forbidden");
  }
}

async function isUserRolePermitted(userId, permittedRoles) {
  const user = await User.findById(userId);
  if (!user) throw new UnauthorizedError("User Not Found");
  if (!user.isActive) throw new UnauthorizedError("User suspended");

  if (user && permittedRoles.includes(user.role)) return true
  return false;
}
