const JWT = require('jsonwebtoken');

const UnauthorizedError = require('../errors/unauthorized-err');

const { NODE_ENV, JWT_SECRET } = process.env;
const KEY = 'mega-super-puper-duper-secret-key';

function auth(req, res, next) {
  const token = req.cookies.jwt;
  if (!token) return (new UnauthorizedError('Произошла ошибка: вы не авторизованы!'));

  let validToken;

  try {
    validToken = JWT.verify(token, NODE_ENV === 'production' ? JWT_SECRET : KEY);
  } catch (err) {
    return next(new UnauthorizedError('Произошла ошибка: вы не авторизованы!'));
  }

  req.user = validToken;
  return next();
}

module.exports = auth;
