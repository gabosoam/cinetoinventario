var express = require('express');
var router = express.Router();
var devolution = require('../model/devolution');
var event = require('../model/event');


router.get('/:voucher', isLoggedIn, function (req, res, next) {
  var vouchersend = req.params.voucher;

  devolution.readOne(vouchersend, function (error, data) {

    res.render('devolutionD', { user: sess.usuarioDatos, bill: vouchersend, data: data[0] });
  })

});


router.get('/', function (req, res, next) {
  devolution.read(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});


router.post('/create',isLoggedIn, function (req, res, next) {

    var data = req.body;
    devolution.create(data, function (error, datos) {
      if (error) {

        res.sendStatus(500);
      } else {

        if (datos.affectedRows > 0) {
          var changes = {
            table: 'DEVOLUTION',
            values: JSON.stringify(data),
            user: req.session.usuarioDatos.name,
            ip: req.ip,
            type: 'CREATE'
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


  router.get('/read/:bill', isLoggedIn, function (req, res, next) {
    var bill = req.params.bill;

    devolution.read2(bill, function (error, data) {
      res.send(data);

    })
  });

  router.get('/readdetail/:bill', isLoggedIn, function (req, res, next) {
    var bill = req.params.bill;

    devolution.readDetail(bill, function (error, data) {
      res.send(data);

    })
  });

  router.post('/delete',isLoggedIn, function (req, res, next) {
    var data = req.body;
    devolution.delete(data, function (error, datos) {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      } else {
        var changes = {
          table: 'DEVOLUTION',
          values: JSON.stringify(data),
          user: req.session.usuarioDatos.name,
          ip: req.ip,
          type: 'DELETE'
        };

        event.create(changes, function (result) {
          console.log(result);
        });
        res.send(true);
      }
    })
  })

  router.post('/close', isLoggedIn, function (req, res, next) {
    var data = req.body;
    devolution.closeVoucher(data,function(error, data) {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    });
  });

  router.post('/update',isLoggedIn, function (req, res, next) {
    var datos = req.body;
    devolution.update(datos, function (error, data) {
      if (error) {

        res.sendStatus(500);
      } else {

        if (data.affectedRows > 0) {
          var changes = {
            table: 'DEVOLUTION',
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

  router.post('/updateAdmin',isLoggedInAdmin, function (req, res, next) {
    var datos = req.body;
    devolution.updateAdmin(datos, function (error, data) {
      if (error) {

        res.sendStatus(500);
      } else {

        if (data.affectedRows > 0) {
          var changes = {
            table: 'DEVOLUTION',
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
