//Install express server
const express = require('express');
const http = require('http');
const path = require('path');

const apps = express();

// Serve only the static files form the dist directory
apps.use(express.static(__dirname + '/dist'));

apps.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});

const port = process.env.PORT || 3000;
apps.set('port', port);

const server = http.createServer(apps);
server.listen(port, () => console.log('running'));
// Start the app by listening on the default Heroku port


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fileRouter = require('./routes/file');


var cors= require('cors');
var app = express();

app.use(cors({
  origin:['http://localhost:4200','http://127.0.0.1:4200','https://sweeten1.herokuapp.com'],
  credentials:true
}));

var mongoose =require('mongoose');

//mongoose.connect('mongodb://localhost/Sweeten');
mongoose.connect('mongodb://zara:Allahiloveyou1@ds037768.mlab.com:37768/sweeten');

//mongodb://<dbuser>:<dbpassword>@ds037768.mlab.com:37768/sweeten



//passport
var passport = require('passport');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
app.use(session({
  name:'myname.sid',
  resave:false,
  saveUninitialized:false,
  secret:'secret',
  cookie:{
    maxAge:36000000,
    httpOnly:false,
    secure:false
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/file', fileRouter);
app.use('/file', fileRouter);




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

module.exports = app;
