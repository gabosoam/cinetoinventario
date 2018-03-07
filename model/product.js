var connection = require('../config/connection.js');


module.exports = {

    read: function (callback) {
        connection.query('SELECT  * FROM v_product where billstate=1;', function (error, results, fields) {
            if (error) {

                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);

            }
        });
    },

    updateFromBill: function (data, cb) {
        connection.query({
            sql: 'UPDATE `product` SET `location`=?, `observation`=? WHERE (`id`=?)',
            values: [data.idlocation, data.observation.toUpperCase(), data.id]
        }, function (err, results, fields) {
            if (err) {
    
                cb(err, null);
            } else {
                cb(null, results)
            }
        })

    },

    readBill: function (bill, callback) {
        connection.query('CALL p_bill(?)', bill, function (error, results, fields) {
            if (error) {

                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results[0]);

            }
        });
    },

    readBillPrice: function (bill, callback) {
        connection.query('CALL p_billprice(?)', bill, function (error, results, fields) {
            if (error) {

                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results[0]);

            }
        });
    },

    update: function (datos, callback) {
        connection.query('UPDATE location SET name=?,description=? WHERE (id=?) LIMIT 1', [datos.name, datos.description, datos.id], function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);

            }
        });
    },


    updateprice: function name(data, callback) {
        connection.query({
            sql: 'UPDATE product SET price=? WHERE variant=? AND bill=?',
            values: [data.price, data.id, data.bill]
        }, function (err, results, fields) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }

        })

    },

    readprice: function (callback) {

        connection.query({
            sql: 'CALL p_billprice2;'
        }, function (err, results, fields) {
            if (err) {

                callback(err, null)
            } else {
                callback(null, results[0])
            }
        });
    },

    delete: function (datos, callback) {
        connection.query('DELETE FROM product WHERE id=?', [datos.id], function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);

            }
        });
    },
    create: function (datos, callback) {
        connection.query('SELECT id from product WHERE barcode=? AND barcode !=\'S/N\' ', [datos.barcode], function (er, re, fi) {
            if (er) {
                callback(er, null);
            } else {
                if (re.length == 0) {
                    connection.query('INSERT INTO product (barcode,variant, location, bill, observation) VALUES (?,?,?,?,?)', [datos.barcode.toUpperCase(), datos.code, datos.location, datos.bill, datos.observation.toUpperCase()], function (error, results, fields) {
                        if (error) {

                            callback(error, null)
                        } else {
                            callback(null, results)
                        }
                    });

                } else {
                    callback('Ya existe el producto');
                }
            }

        })

    },

    createserial: function (datos, callback) {

        for (var i = 0; i < datos.cant; i++) {
            connection.query('INSERT INTO product (barcode,variant, location, bill, price, observation) VALUES (?,?,?,?,?,?)',
                [datos.barcode.toUpperCase(), datos.code, datos.location, datos.bill, datos.price, datos.observation.toUpperCase()],
                function (error, results, fields) {
                    if (error) {
                   
                        callback(error, null)
                    } else {
               
                    }
                });
        };

        callback(null, 'Ingreso correcto');
    },

    createserialauto: function (datos, callback) {

        for (var i = 0; i < datos.cant; i++) {
            console.log(i+' '+datos.cant)

            connection.query('CALL barcode();', function (error, results, fields) {
                if (error) {
               
                    callback('error en la consulta: ' + error, null);
                } else {
                    
                    
                    var barcode = results[0][0].barcode;
                    connection.query('INSERT INTO product (barcode,variant, location, bill, price, observation) VALUES (?,?,?,?,?,?)',
                        [barcode, datos.code, datos.location, datos.bill, datos.price, datos.observation.toUpperCase()],
                        function (error, results, fields) {
                            if (error) {
                                console.log(error)
                                callback(error, null)
                            } else {
                             if (i==datos.cant-1) {
                                 callback(null, 'Completo')
                             } else {
                                 
                             }
                            }
                        });

                }
            });




        };

        callback(null, 'Ingreso correcto');
    }
}


function createQuery(datos) {
    var query = "";
    for (var i = 0; i < parseInt(datos.total); i++) {
        query += '(\'' + datos.description + '\',\'' + '13' + '\',\'' + datos.bill + '\'),';
    }

    return 'INSERT INTO product (variant, location, bill) VALUES' + query.slice(0, -1);

}
