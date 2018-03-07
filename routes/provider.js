var express = require('express');
var router = express.Router();
var provider = require('../model/provider');
var event = require('../model/event');

/* GET home page. */
router.get('/', isLoggedIn, function (req, res, next) {
  res.render('provider', {  user: sess.usuarioDatos });
});

router.get('/admin', isLoggedInAdmin, function (req, res, next) {
  res.render('providerAdmin', {  user: sess.adminDatos });
});






router.get('/read', function (req, res, next) {
  provider.read(function (error, datos) {
    if (error) {
   
    } else {
      res.send(datos);
    }
  })
});

router.post('/update',isLoggedIn, function (req,res,next) {
   var data= req.body;
   provider.update(data,function(error, datos){
    if (error) {
      event.createError(error, req.session.usuarioDatos.name,'PROVIDER',function(message) {});
      res.sendStatus(500);
    } else {

      if (datos.affectedRows>0) {
        var changes = {
          table: 'PROVIDER',
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

router.post('/updateAdmin', isLoggedInAdmin, function (req,res,next) {
  var data= req.body;
  provider.update(data,function(error, datos){
   if (error) {
    event.createError(error, req.session.adminDatos.name,'PROVIDER',function(message) {});
     res.sendStatus(500);
   } else {

     if (datos.affectedRows>0) {
       var changes = {
         table: 'PROVIDER',
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
   provider.delete(data,function(error, datos){
    if (error) {
      event.createError(error, req.session.usuarioDatos.name,'PROVIDER',function(message) {});
      res.sendStatus(500);
    } else {

      if (datos.affectedRows>0) {
        var changes = {
          table: 'PROVIDER',
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

router.post('/deleteAdmin',isLoggedInAdmin, function (req,res,next) {
  var data= req.body;
  provider.delete(data,function(error, datos){
   if (error) {
    event.createError(error, req.session.adminDatos.name,'PROVIDER',function(message) {});
     res.sendStatus(500);
   } else {

     if (datos.affectedRows>0) {
       var changes = {
         table: 'PROVIDER',
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
 
   provider.create(data,function(error, datos){
    if (error) {
      event.createError(error, req.session.usuarioDatos.name,'PROVIDER',function(message) {});
      res.sendStatus(500);
    } else {

      if (datos.affectedRows>0) {
        var changes = {
          table: 'PROVIDER',
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

router.post('/createAdmin',isLoggedInAdmin, function (req,res,next) {
  var data= req.body;

  provider.create(data,function(error, datos){
   if (error) {
    event.createError(error, req.session.adminDatos.name,'PROVIDER',function(message) {});
     res.sendStatus(500);
   } else {

     if (datos.affectedRows>0) {
       var changes = {
         table: 'PROVIDER',
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
