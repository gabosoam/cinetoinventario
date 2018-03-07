var express = require('express');
var router = express.Router();
var location = require('../model/location');
var event = require('../model/event');

/* GET home page. */
router.get('/', isLoggedIn, function (req, res, next) {
  res.render('location', {  user: sess.adminDatos });
});





router.get('/read', function (req, res, next) {
  location.read(function (error, datos) {
    if (error) {
   
    } else {
      res.send(datos);
    }
  })
});

router.get('/read2', function (req, res, next) {
  location.read2(function (error, datos) {
    if (error) {
   
    } else {
      res.send(datos);
    }
  })
});

router.post('/update', isLoggedIn, function (req,res,next) {
   var data= req.body;
   location.update(data,function(error, datos){
    if (error) {
  
      res.sendStatus(500);
    } else {

      if (datos.affectedRows>0) {
        var changes = {
          table: 'LOCATION',
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

router.post('/delete',isLoggedIn, function (req,res,next) {
   var data= req.body;
   location.delete(data,function(error, datos){
    if (error) {
   
      res.sendStatus(500);
    } else {

      if (datos.affectedRows>0) {
        var changes = {
          table: 'LOCATION',
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


router.post('/create',isLoggedIn, function (req,res,next) {
   var data= req.body;
   location.create(data,function(error, datos){
    if (error) {

      res.sendStatus(500);
    } else {

      if (datos.affectedRows>0) {
        var changes = {
          table: 'LOCATION',
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
  if (sess.adminDatos)
    return next();
  sess.originalUrl = req.originalUrl;
  res.redirect('/login');
}







module.exports = router;
