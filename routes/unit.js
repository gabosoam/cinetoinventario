var express = require('express');
var router = express.Router();
var unit = require('../model/unit');
var event = require('../model/event');

/* GET home page. */
router.get('/', isLoggedIn, function (req, res, next) {
  res.render('unit', {  user: sess.adminDatos });
});
router.get('/read', function (req, res, next) {
  unit.read(function (error, datos) {
    if (error) {
    
    } else {
      res.send(datos);
    }
  })
});

router.post('/update',isLoggedIn, function (req,res,next) {
   var data= req.body;
   unit.update(data,function(error, datos){
    if (error) {
      res.sendStatus(500);
    } else {

      if (datos.affectedRows>0) {
        var changes = {
          table: 'UNIT',
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

router.post('/delete', function (req,res,next) {
   var data= req.body;
   unit.delete(data,function(error, datos){
    if (error) {
  
      res.sendStatus(500);
    } else {

      if (datos.affectedRows>0) {

        var changes = {
          table: 'UNIT',
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


router.post('/create', function (req,res,next) {
   var data= req.body;
   unit.create(data,function(error, datos){
    if (error) {
     
      res.sendStatus(500);
    } else {

      if (datos.affectedRows>0) {
        var changes = {
          table: 'UNIT',
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
