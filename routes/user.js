var express = require('express');
var router = express.Router();
var user = require('../model/user');
var prueba = require('../routes/users');
var event = require('../model/event');

/* GET home page. */
router.get('/', isLoggedInAdmin, function (req, res, next) {
  res.render('user', { user: sess.adminDatos });

});





router.get('/admin', isLoggedInAdmin, function (req, res, next) {
  res.render('user', { user: sess.adminDatos });

});




router.get('/read', function (req, res, next) {
  user.read(function (error, datos) {
    if (error) {

    } else {
      res.send(datos);
    }
  })
});

router.get('/read2', function (req, res, next) {
  user.read2(function (error, datos) {
    if (error) {

    } else {
      res.send(datos);
    }
  })
});

router.post('/update', isLoggedInAdmin, function (req, res, next) {
  var data = req.body;
  user.update(data, function (error, datos) {
    if (error) {
      res.sendStatus(500);
    } else {

      if (datos.affectedRows > 0) {
        var changes = {
          table: 'USER',
          values: JSON.stringify(data),
          user: req.session.adminDatos.name,
          ip: req.ip,
          type: 'UPDATE'
        };
  
        event.create(changes, function (result) {
          console.log(result);
        });
        res.send(true);
      } else {
        res.sendStatus(500);
      }
    }
  })
})

router.post('/editPassword', function (req, res, next) {

  var datos = req.body;
  user.updatePass(datos, function (error, datos) {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.send(datos);
      
    }
  })
})

router.post('/delete',isLoggedInAdmin, function (req, res, next) {
  var data = req.body;
  user.delete(data, function (error, datos) {
    if (error) {

      res.sendStatus(500);
    } else {

      if (datos.affectedRows > 0) {
        var changes = {
          table: 'USER',
          values: JSON.stringify(data),
          user: req.session.adminDatos.name,
          ip: req.ip,
          type: 'DELETE'
        };
  
        event.create(changes, function (result) {
          console.log(result);
        });
        res.send(true);
      } else {
        res.sendStatus(500);
      }
    }
  })
})


router.post('/create',isLoggedInAdmin, function (req, res, next) {
  var data = req.body;
  user.create(data, function (error, datos) {
    if (error) {

      res.sendStatus(500);
    } else {

      if (datos.affectedRows > 0) {
        var changes = {
          table: 'USER',
          values: JSON.stringify(data),
          user: req.session.adminDatos.name,
          ip: req.ip,
          type: 'INSERT'
        };
  
        event.create(changes, function (result) {
          console.log(result);
        });
        res.send(true);
      } else {
        res.sendStatus(500);
      }
    }
  })
})


router.post('/login', function (req, res, next) {
  var sess = req.session;
  user.login(req.body, function (err, dates) {
    if (err) {
      res.render('login', { message: err })
    } else {

      var changes = {
        table: 'LOGIN',
        user: dates.name,
        ip: req.ip,
        type: 'LOGIN'
      };

      event.create(changes, function (result) {
        console.log(result);
      });

      if (dates.rol == 1) {
        sess.usuarioDatos = dates;
        res.redirect('/');

      } else {
        sess.adminDatos = dates;
        res.redirect('/admin');

      }


    }

  });
});

function isLoggedIn(req, res, next) {
  sess = req.session;

  if (sess.usuarioDatos)
    return next();
  sess.originalUrl = req.originalUrl;
  res.redirect('/login');
}

function isLoggedInAdmin(req, res, next) {
  sess = req.session;

  if (sess.adminDatos)
    return next();
  sess.originalUrl = req.originalUrl;
  res.redirect('/login');
}






module.exports = router;
