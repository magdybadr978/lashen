const { UNAUTHORIZED, FORBIDDEN, UNPROCESSABLE_ENTITY, CONFLICT, BAD_REQUEST, NOT_FOUND, INTERNAL_SERVER_ERROR } = require("../constants/status-codes");

exports.NotFoundError = class extends Error {
  constructor(message) {
    super(message);
    this.status = NOT_FOUND;
  }
};

exports.BadRequestError = class extends Error {
  constructor(message) {
    super(message);
    this.status = BAD_REQUEST;
  }
};

exports.ConflictError = class extends Error {
  constructor(message) {
    super(message);
    this.status = CONFLICT;
  }
};

exports.UnprocessableEntityError = class extends Error {
  constructor(message) {
    super(message);
    this.status = UNPROCESSABLE_ENTITY;
  }
};

exports.UnauthorizedError = class extends Error {
  constructor(message) {
    super(message);
    this.status = UNAUTHORIZED;
  }
};

exports.ForbiddenError = class extends Error {
  constructor(message) {
    super(message);
    this.status = FORBIDDEN;
  }
};

exports.InternalError = class extends Error {
  constructor(message) {
    super(message);
    this.status = INTERNAL_SERVER_ERROR;
  }
};
