var express = require('express');
var router = express.Router();
var bill = require('../model/bill');
var product = require('../model/product');
var event = require('../model/event');

/* GET home page. */
router.get('/', isLoggedIn, function (req, res, next) {
  res.render('bill', { user: sess.usuarioDatos });
});



router.get('/:bill', isLoggedIn, function (req, res, next) {
  var billsend = req.params.bill;

  bill.readOne(billsend, function (error, data) {

    res.render('product', { user: sess.usuarioDatos, bill: billsend, data: data[0] });
  })

});

router.get('/admin/:bill', isLoggedInAdmin, function (req, res, next) {
  var billsend = req.params.bill;

  bill.readOne(billsend, function (error, data) {

    res.render('productAdmin', { user: sess.adminDatos, bill: billsend, data: data[0] });
  })

});

router.get('/read/:bill', isLoggedIn, function (req, res, next) {
  var bill = req.params.bill;

  product.readBill(bill, function (error, data) {
    res.send(data);

  })
});

router.get('/readprice/:bill', isLoggedInAdmin, function (req, res, next) {
  var bill = req.params.bill;

  product.readBillPrice(bill, function (error, data) {

    if (error) {
      console.log(error);
    } else {
      console.log(data);
      res.send(data);
    }
    

  })
});

router.post('/close', isLoggedIn, function (req, res, next) {
  var data = req.body;
  bill.closeBill(data,function(error, data) {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

router.post('/read', function (req, res, next) {

  bill.read(function (error, datos) {
    if (error) {
    } else {
      res.send(datos);
    }
  })
});

router.post('/read2', function (req, res, next) {
  bill.read2(function (error, datos) {
    if (error) {
    } else {
      res.send(datos);
    }
  })
});

router.post('/update', isLoggedIn, function (req, res, next) {
  var data = req.body;
  bill.update(data, function (error, datos) {
    if (error) {

      res.sendStatus(500);
    } else {

      if (datos.affectedRows > 0) {

        var changes = {
          table: 'BILL',
          values: JSON.stringify(data),
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

router.post('/updateAdmin', isLoggedInAdmin, function (req, res, next) {
  var data = req.body;
  bill.updateAdmin(data, function (error, datos) {
    if (error) {

      res.sendStatus(500);
    } else {

      var changes = {
        table: 'BILL',
        values: JSON.stringify(data),
        user: req.session.adminDatos.name,
        ip: req.ip,
        type: 'UPDATE'
      };

      event.create(changes, function (result) {
        console.log(result);
      });

      if (datos.affectedRows > 0) {
        res.send(true);
      } else {
        res.sendStatus(500);
      }
    }
  })
})

router.post('/delete',isLoggedIn, function (req, res, next) {
  var data = req.body;
  bill.delete(data, function (error, datos) {
    if (error) {

      res.sendStatus(500);
    } else {

      if (datos.affectedRows > 0) {
        var changes = {
          table: 'BILL',
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


router.post('/create',isLoggedIn, function (req, res, next) {

  var data = req.body;
  bill.create(data, function (error, datos) {
    if (error) {
      console.log(error);

      res.sendStatus(500);
    } else {

      var changes = {
        table: 'BILL',
        values: JSON.stringify(data),
        user: req.session.usuarioDatos.name,
        ip: req.ip,
        type: 'INSERT'
      };

      event.create(changes, function (result) {
        console.log(result);
      });

      if (datos.affectedRows > 0) {
        res.send(true);
      } else {
        res.sendStatus(500);
      }
    }
  })
})

router.post('/create2', function (req, res, next) {
  
    var datos = req.body;
    bill.create(datos, function (error, datos) {
    
      if (error) {
  
        res.sendStatus(500);
      } else {
  
        if (datos.affectedRows > 0) {
          var id ={
            id: datos.insertId
          }
          res.send(id);
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
