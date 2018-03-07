var express = require('express');
var router = express.Router();
var detail = require('../model/detail');
var event = require('../model/event');

/* GET home page. */
router.get('/', isLoggedIn, function (req, res, next) {
  if (sess.usuarioDatos.rol == 1) {
    res.render('index', { user: sess.usuarioDatos });
  } else {
    res.render('detail', { user: sess.usuarioDatos });
  }
});

router.post('/update', isLoggedIn, function(req, res, next) {
  var data = req.body;
  detail.updateFromVaucher(data, function(err, result) {
    if (err) {
      res.sendStatus(500);
    } else {
      if (result.affectedRows>0) {
        res.send(true);
      } else {
        res.sendStatus(500);
      }
    }
  })

})

router.post('/create', isLoggedIn,function (req, res, next) {
  var datos = req.body;
 
  detail.create(datos, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      var changes = {
        table: 'DETAIL',
        values: JSON.stringify(datos),
        user: req.session.usuarioDatos.name,
        ip: req.ip,
        type: 'INSERT'
      };

      event.create(changes, function (result) {
        console.log(result);
      });
      res.send(data);
    }
  });

})

router.post('/createserial', function (req, res, next) {
  var datos = req.body;

 console.log('DETALLE');
 console.log(datos);
  
  detail.createserial(datos, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });

})

router.post('/delete',isLoggedIn, function (req, res, next) {
  var datos = req.body;
  detail.delete(datos, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      var changes = {
        table: 'DETAIL',
        values: JSON.stringify(datos),
        user: req.session.usuarioDatos.name,
        ip: req.ip,
        type: 'DELETE'
      };

      event.create(changes, function (result) {
        console.log(result);
      });
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
