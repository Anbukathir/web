const express = require('express');
const app = express();
const routes = require('./routes')
const passport = require('passport');
const { jwtStrategy } = require('./config/passport');
const router = require('./routes');
const { postUserController } = require('./validation/user.validation');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(passport.initialize());
passport.use("jwt", jwtStrategy);
app.use('/', routes);

/*
const errorHandler = (err, req, res, next) => {
    console.log("error handler");
    let { statusCode, message } = err;
    if (!err.isOperational) {
      statusCode = 500;
      message = "httpStatus[httpStatus.INTERNAL_SERVER_ERROR]";
    }
  
    res.locals.errorMessage = err.message;
  
    const response = {
      code: statusCode,
      message,
    };
  
    res.status(statusCode).send(response);
  };
app.use(errorHandler);
*/

app.use(passport.initialize());
app.use(passport.session());

app.listen(8080, function () {
  console.log('started on post 8080');
})
