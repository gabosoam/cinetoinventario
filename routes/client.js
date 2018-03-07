var express = require('express');
var router = express.Router();
var client = require('../model/client');
var event = require('../model/event');

/* GET home page. */
router.get('/', isLoggedIn, function (req, res, next) {
  res.render('client', { user: sess.usuarioDatos });
});

router.get('/admin', isLoggedInAdmin, function (req, res, next) {
  res.render('clientAdmin', { user: sess.adminDatos });
});





router.get('/read', function (req, res, next) {
  client.read(function (error, datos) {
    if (error) {

    } else {
      res.send(datos);
    }
  })
});

router.get('/read2', function (req, res, next) {
  client.read2(function (error, datos) {
    if (error) {

    } else {
      res.send(datos);
    }
  })
});

router.post('/update', function (req, res, next) {
  var datos = req.body;
  client.update(datos, function (error, data) {
    if (error) {
      event.createError(error, req.session.usuarioDatos.name,'CLIENT',function(message) {});
      res.sendStatus(500);
    } else {

      if (data.affectedRows > 0) {

        console.log(req.session);

        var changes = {
          table: 'CLIENT',
          values: JSON.stringify(datos),
          user: req.session.usuarioDatos.name,
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

router.post('/updateAdmin', function (req, res, next) {
  var datos = req.body;
  client.update(datos, function (error, data) {
    if (error) {
      event.createError(error, req.session.adminDatos.name,'CLIENT',function(message) {});
      res.sendStatus(500);
    } else {

      if (data.affectedRows > 0) {

        console.log(req.session);

        var changes = {
          table: 'CLIENT',
          values: JSON.stringify(datos),
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

router.post('/delete',isLoggedIn, function (req, res, next) {
  var data = req.body;
  client.delete(data, function (error, datos) {
    if (error) {  
      event.createError(error, req.session.usuarioDatos.name,'CLIENT',function(message) {});
      res.sendStatus(500);
    } else {

      if (datos.affectedRows > 0) {

        var changes = {
          table: 'CLIENT',
          values: JSON.stringify(data),
          user: req.session.usuarioDatos.name,
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

router.post('/deleteAdmin', isLoggedInAdmin, function (req, res, next) {
  var data = req.body;
  client.delete(data, function (error, datos) {
    if (error) {
      event.createError(error, req.session.adminDatos.name,'CLIENT',function(message) {});
      res.sendStatus(500);
    } else {

      if (datos.affectedRows > 0) {

        var changes = {
          table: 'CLIENT',
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


router.post('/create', isLoggedIn, function (req, res, next) {
  var data = req.body;
  
  client.create(data, function (error, datos) {
    if (error) {
      event.createError(error, req.session.usuarioDatos.name,'CLIENT',function(message) {});
      res.status(500).send(error);
    } else {

      if (datos.affectedRows > 0) {
        var changes = {
          table: 'CLIENT',
          values: JSON.stringify(data),
          user: req.session.usuarioDatos.name,
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

router.post('/createAdmin', isLoggedInAdmin, function (req, res, next) {
  var data = req.body;
  
  client.create(data, function (error, datos) {
    if (error) {
      event.createError(error, req.session.adminDatos.name,'CLIENT',function(message) {});
      res.status(500).send(error);
    } else {

      if (datos.affectedRows > 0) {
        var changes = {
          table: 'CLIENT',
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
