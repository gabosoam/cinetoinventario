var express = require('express');
var router = express.Router();
var product = require('../model/product');
var cosa = require('../app');
var index = require('../model/index');
var lotes = require('../model/lotes');
var event = require('../model/event');
var mysqlDump = require('mysqldump');


//cosa.myEmitter.emit('event');

/* GET home page. */
router.get('/', isLoggedIn, function (req, res, next) {
	res.render('index', { user: sess.usuarioDatos });
});

router.get('/events', isLoggedInAdmin, function (req, res, next) {

	mysqlDump({
		host: 'localhost',
		user: 'root',
		password: '12345',
		database: 'inventory',
		port: 3307,
		dest:'../inventory.sql', // destination file
		dropTable : true
	},function(err){
		console.log(err);
	})
	res.render('event', { user: sess.adminDatos });
});

router.get('/event', isLoggedInAdmin, function (req, res, next) {
	event.read(function(err, result) {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});
});

router.get('/error', isLoggedInAdmin, function (req, res, next) {
	event.readError(function(err, result) {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});
});


router.get('/generateBarcode', isLoggedIn, function (req, res, next) {
	index.createBarcode(function (error, data) {
		if (error) {
			res.send(error);
		} else {
			res.send(data);
		}
	})

});

router.get('/vouchers', isLoggedIn, function (req, res, next) {
	res.render('voucher', { user: sess.usuarioDatos });
});

router.get('/devolutions', isLoggedIn, function (req, res, next) {
	res.render('devolution', { user: sess.usuarioDatos });
});

router.get('/billAdmin', isLoggedInAdmin, function (req, res, next) {
	res.render('billAdmin', { user: sess.adminDatos });
});

router.get('/lotes', isLoggedIn, function (req, res, next) {
	res.render('lotes', { user: sess.usuarioDatos });
});



router.post('/lotes/codes',isLoggedIn, function(req,res,next) {
	var code = req.body;
	lotes.searchModel(code, function(data) {
		console.log(data);
		res.send(data);	
	})
	
})

router.post('/lotes/model', isLoggedIn, function (req, res, next) {
	var data = req.body;
	var values = data['aux[]'];

	lotes.insertModels(values, function (mensaje) {
		res.send(mensaje);
	})


});

router.post('/lotes/barcode', isLoggedIn, function (req, res, next) {
	var data = req.body;
	lotes.insertBarcode(data, function (message) {
	
		res.send(message);
	})


});

router.post('/lotes/brand', isLoggedIn, function (req, res, next) {
	var data = req.body;
	var values = data['aux[]'];

	lotes.insertBrands(values, function (mensaje) {
		res.send(mensaje);
	})


});

router.post('/lotes/location', isLoggedIn, function (req, res, next) {
	var data = req.body;
	var values = data['aux[]'];

	lotes.insertLocation(values, function (mensaje) {
		res.send(mensaje);
	})


});

router.get('/voucherAdmin', isLoggedInAdmin, function (req, res, next) {
	res.render('voucherAdmin', { user: sess.adminDatos });
});

router.get('/devolutionAdmin', isLoggedInAdmin, function (req, res, next) {
	res.render('devolutionAdmin', { user: sess.adminDatos });
});

router.get('/admin', isLoggedInAdmin, function (req, res, next) {
	res.render('admin', { user: sess.adminDatos });
});

router.get('/login', function (req, res, next) {
	res.render('login', { message: null });
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



router.get('/logout', function (req, res) {
	req.session.destroy(function (err) {
		if (err) {
		} else {
			res.redirect('/login');
		}
	});
});


module.exports = router;
