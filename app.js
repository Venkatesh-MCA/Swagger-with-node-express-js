var createError = require('http-errors');
var express = require('express');
var path = require('path');
const dotenv = require('dotenv')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDB = require('./config/db')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/students');
var dbbackup = require('./routes/dbbackup');
dotenv.config({ path: './config/config.env' })
connectDB()
var app = express();

const swaggerUi=require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc');
//const swaggerDefinition = require('./swagger')

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Abhyas APIs',
    version: '1.0.0',
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

dotenv.config({ path: './config/config.env' })
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/students', usersRouter);
app.use('/dbbackup', dbbackup);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// Logging
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'))
}
const PORT = process.env.PORT || 3000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

module.exports = app;
