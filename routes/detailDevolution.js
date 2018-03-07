var express = require('express');
var router = express.Router();
var detail = require('../model/detailDevolution');

/* GET home page. */
router.get('/', isLoggedIn, function (req, res, next) {
  if (sess.usuarioDatos.rol == 1) {
    res.render('index', { user: sess.usuarioDatos });
  } else {
    res.render('detail', { user: sess.usuarioDatos });
  }
});

router.post('/create', function (req, res, next) {
  var datos = req.body;
  console.log(datos);
  detail.create(datos, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });

})

router.post('/delete', function (req, res, next) {
  var datos = req.body;
  console.log(datos);
  detail.delete(datos, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });

})

function isLoggedIn(req, res, next) {
  sess = req.session;
  if (sess.usuarioDatos)
    return next();
  sess.originalUrl = req.originalUrl;
  res.redirect('/login');
}


module.exports = router;
