require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');

const cors = require('./middlewares/cors');
const { PORT, MONGOOSE_URL, limiter } = require('./utils/config');
const checkedErrors = require('./middlewares/error');
const router = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();
mongoose.connect(MONGOOSE_URL);

app.use(cors);
app.use(helmet());
app.use(limiter);
app.use(express.json());
app.use(cookieParser());

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

app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
