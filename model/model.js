var connection = require('../config/connection.js');


module.exports = {

    read: function (callback) {
        connection.query('SELECT  * FROM v_modelview ORDER BY description;', function (error, results, fields) {
            if (error) {
                console.log(error);
                callback('error en la consulta: ' + error, null);
            } else {
                console.log(results);
                callback(null, results);
            }
        });
    },

    readOne: function (code, callback) {
        connection.query('SELECT  * FROM model where code=?', code, function (error, results, fields) {
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
            }
        });
    },

    readBil: function (callback) {

        connection.query('SELECT * FROM v_modelbill;', function (error, results, fields) {
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
            }
        });
    },

    read2: function (callback) {
        connection.query('SELECT  * FROM v_model;', function (error, results, fields) {
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
            }
        });
    },

    update: function (datos, callback) {
        console.log(datos.unit);
        connection.query('UPDATE model SET code=?, description=?, stockmin=?, unit=?, brand=?, category=? WHERE (id=?) LIMIT 1', [datos.code.toUpperCase(), datos.description.toUpperCase(), datos.stockmin, datos.unit, datos.brand, datos.category, datos.id], function (error, results, fields) {
            if (error) {
                console.log(error);
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
            }
        });
    },

    delete: function (datos, callback) {
        connection.query('DELETE FROM model WHERE id=?', [datos.id], function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
            }
        });
    },


    create: function (datos, callback) {
        connection.query('INSERT INTO model (code, description, stockmin, unit, category, brand) VALUES (?, ?, ?, ?, ?, ?)', [datos.code.toUpperCase(), datos.description.toUpperCase(), datos.stockmin, datos.unit, datos.category, datos.brand], function (error, results, fields) {
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
            }
        });
    },




}
