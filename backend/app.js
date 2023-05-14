require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cors = require('cors');

const limiter = require('./utils/limiter');
const checkedErrors = require('./middlewares/error');
const router = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();
const { PORT = 3000 } = process.env;
const corsOptions = {
  credentials: true,
  origin: ['http://localhost:3001',
    'https://mesto.blyaderuiner.nomoredomains.monster',
    'https://api.mesto.blyaderuiner.nomoredomains.monster',
  ],
};

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use(express.json());
app.use(helmet());
app.use(limiter);
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(requestLogger);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.use(router);
app.use(errorLogger);

app.use(errors());
app.use(checkedErrors);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
