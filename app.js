const createError = require('http-errors');
const compression = require('compression');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/client/index');
const aboutRouter = require('./routes/client/about');
const contactRouter = require('./routes/client/contact');
const menuRouter = require('./routes/client/menu');
const newsDetailRouter = require('./routes/client/news-detail');
const newsRouter = require('./routes/client/news');
const reservationsRouter = require('./routes/api/reservation');

const app = express();

// Compress all routes
app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Template routes
app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/menu', menuRouter);
app.use('/news-detail', newsDetailRouter);
app.use('/news', newsRouter);

// API routes
app.use('/api/reservations', reservationsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
