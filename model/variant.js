var config = require('../config/connection.js');



module.exports = {

    read: function (callback) {
        connection.query('SELECT  * FROM variant;', function (error, results, fields) {
            if (error) {

                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
                
            }
        });
    },

    read2: function (callback) {
        connection.query('SELECT  * FROM v_variant;', function (error, results, fields) {
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
            }
        });
    },

    update: function (datos, callback) {
        connection.query('UPDATE variant SET code=?, description=?, stockmin=?, unit=? WHERE (id=?) LIMIT 1', [datos.code, datos.description, datos.stockmin, datos.unit, datos.id], function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results); 
            }
        });
    },

    delete: function (datos, callback) {
        connection.query('DELETE FROM variant WHERE id=?', [datos.id], function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);   
            }
        });
    },


    create: function (datos, callback) {
        connection.query('INSERT INTO variant(code, description, model,stockmin,unit) VALUES(?,?,?,?,?)', [datos.code, datos.description, datos.model, datos.price, datos.stockmin, datos.unit], function (error, results, fields) {
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
            }
        });
    },
}
