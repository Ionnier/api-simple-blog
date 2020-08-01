const express = require('express');
const path = require('path');
const blogRouter = require('./routers/blogRouter');
const userRouter = require('./routers/userRouter');
const app = express();
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

app.use(express.json());

app.use('/api/v1/blogs', blogRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
