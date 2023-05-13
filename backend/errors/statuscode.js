const RESPONSE_OK = 200;
const RESPONSE_CREATED = 201;
const ERROR_BAD_REQUEST = 400;
const ERROR_UNAUTHORIZED = 401;
const ERROR_FORBIDDEN = 403;
const ERROR_NOT_FOUND = 404;
const ERROR_CONFLICT = 409;
const ERROR_DEFAULT = 500;

const responseMessage = (res, status, answer) => res.status(status).send(answer);

module.exports = {
  ERROR_UNAUTHORIZED,
  RESPONSE_OK,
  RESPONSE_CREATED,
  ERROR_BAD_REQUEST,
  ERROR_FORBIDDEN,
  ERROR_NOT_FOUND,
  ERROR_CONFLICT,
  ERROR_DEFAULT,
  responseMessage,
};
