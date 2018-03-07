
var connection = require('../config/connection.js');

module.exports = {
    searchModel: function (data, callback) {
        connection.query({
            sql: 'SELECT * FROM model WHERE code=? ',
            values: [data.data]
        }, function (err, results, fields) {
            if (err) {
                callback(false);
            } else {
           
                if (results.length == 0) {
                    callback(true);
                } else {
                    callback(false);
                }

            }
        })

    },
    insertBarcode: function(data, callback) {
        var variant,location,barcode;
        connection.query({
            sql: 'SELECT * FROM model where code=?',
            values: [data.variant]
        },function(err,results, fields) {
            if (err) {
                callback(err)
            } else {
                if (results[0]) {
                    variant = results[0].id;
                    connection.query({
                        sql: 'SELECT * FROM location WHERE name=?',
                        values: [data.location]
                    },function(err, results, fields) {
                        if (err) {
                            callback(err);
                        } else {
                            if (results[0]) {
                                location = results[0].id;
                                
                                connection.query({
                                    sql:'SELECT * from product WHERE barcode=?',
                                    values: [data.barcode]
                                },function(err, results, fields) {
                                    if (err) {
                                        callback(err)
                                    } else {
                                        if (results[0]) {
                                            barcode= results[0].barcode;
                                            callback('EL N. DE SERIE '+barcode+' YA EXISTE');
                                        } else {
                                            connection.query({
                                                sql: 'INSERT INTO `product` (`barcode`, `variant`, `location`, `bill`, `observation`) VALUES (?,?,?,?,?)',
                                                values: [data.barcode.toUpperCase(), variant,location,data.bill, data.observation.toUpperCase()]
                                            },function(err,results, fields) {
                                                if (err) {
                                                    console.log(err);
                                                    callback(err)
                                                } else {
                                                    console.log(results);
                                                    callback('GUARDADO');
                                                }
                                            })
                                        }
                                    }
                                })




                            } else {
                                callback('NO EXISTE EL ALMACEN '+data.location);
                            }
                        }
                    })








                } else {
                    callback('NO EXISTE EL CÓDIGO '+data.variant);
                }
            }
        })
    }
}

