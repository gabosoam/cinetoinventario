var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
var act = require('./routes/act');
var brand = require('./routes/brand');
var category = require('./routes/category');
var client = require('./routes/client');
var detail = require('./routes/detail');
var location = require('./routes/location');
var model = require('./routes/model');
var product = require('./routes/product');
var provider = require('./routes/provider');
var user = require('./routes/user');
var variant = require('./routes/variant');
var voucher = require('./routes/voucher');
var unit = require('./routes/unit');
var price = require('./routes/price');
var bill = require('./routes/bill');
var devolution = require('./routes/devolution');
var detaildevolution = require('./routes/detailDevolution')
var child_process = require('child_process');

var CronJob = require('cron').CronJob;
var job = new CronJob('59 59 20 * * 1-5', function() {
child_process.exec('cmd /c start C:\INVENTARIO/inventario/bat/bat.bat', function(error,data){
if (error) {
  console.log(error)
} else {
  
}
});

    
  
  }, function () {
   
  },
  true
);







var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: '4587ticketing14685',
  cookie: { maxAge: 6000000000000000000 },
  resave: false,
  saveUninitialized: true
}));

app.use('/', index);
app.use('/users', users);
app.use('/act', act);
app.use('/brand', brand);
app.use('/category', category);
app.use('/client', client);
app.use('/detail', detail);
app.use('/location', location);
app.use('/model', model);
app.use('/product', product);
app.use('/provider', provider);
app.use('/user', user);
app.use('/variant', variant);
app.use('/voucher', voucher);
app.use('/unit', unit);
app.use('/price', price);
app.use('/bill', bill);
app.use('/devolution', devolution);
app.use('/detaildevolution', detaildevolution);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
