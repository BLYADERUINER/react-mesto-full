const rateLimit = require('express-rate-limit');

const {
  PORT = 3000,
  MONGOOSE_URL = 'mongodb://127.0.0.1:27017/mestodb',
} = process.env;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

module.exports = {
  PORT,
  MONGOOSE_URL,
  limiter,
};
