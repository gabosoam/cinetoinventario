var express = require('express');
var router = express.Router();
var variant = require('../model/variant');

/* GET home page. */
router.get('/', isLoggedIn, function (req, res, next) {
    if (sess.usuarioDatos.rol==1) {
    res.render('index', {  user: sess.usuarioDatos });
  } else {
   res.render('variant', {  user: sess.usuarioDatos });
 }
});
router.get('/read', function (req, res, next) {
  variant.read(function (error, datos) {
    if (error) {

    } else {
      res.send(datos);
    }
  })
});


router.get('/read2', function (req, res, next) {
  variant.read2(function (error, datos) {
    if (error) {

    } else {
      res.send(datos);
    }
  })
});

router.post('/update', function (req,res,next) {
   var datos= req.body;


   variant.update(datos,function(error, datos){
    if (error) {

      res.sendStatus(500);
    } else {

      if (datos.affectedRows>0) {
           res.send(true);
      } else {
            res.sendStatus(500);
      }
    }
  })
})

router.post('/delete', function (req,res,next) {
   var datos= req.body;
   variant.delete(datos,function(error, datos){
    if (error) {

      res.sendStatus(500);
    } else {

      if (datos.affectedRows>0) {
           res.send(true);
      } else {
            res.sendStatus(500);
      }
    }
  })
})


router.post('/create', function (req,res,next) {
   var datos= req.body;
   variant.create(datos,function(error, datos){
    if (error) {

      res.sendStatus(500);
    } else {

      if (datos.affectedRows>0) {
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







module.exports = router;
