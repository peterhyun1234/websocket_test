var express = require('express');
var createError = require('http-errors');
var path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
// var http = require('http');
// var fs = require('fs');

var app = express();

// mysql 연동
var mysql_db = require('./db_connection.js');
var connect = mysql_db.mysql_init();
mysql_db.mysql_open(connect);
exports.connection = connect;

app.set('port', process.env.PORT || 3000);

// URL REST-API SERVER
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});


app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
})

// view engine setup
//app.engine('pug', require('pug').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Router 정의
const testRouter = require('./router/test');

app.use('/test', testRouter);

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

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/files', express.static(__dirname + '/files'));

module.exports = app;
module.exports = router;