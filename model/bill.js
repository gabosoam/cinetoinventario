
var bcrypt = require('bcrypt-nodejs');
var generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}
var connection = require('../config/connection.js');

module.exports = {

    read: function (callback) {
        connection.query('SELECT  * FROM bill ORDER BY id DESC;', function (error, results, fields) {
            if (error) {

                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
            }
        });
    },

    readOne: function (bill, callback) {
        connection.query('SELECT  * FROM v_infobill WHERE id=?;', bill, function (error, results, fields) {
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
            }
        });
    },

    read2: function (callback) {
        connection.query('SELECT  * FROM v_bill;', function (error, results, fields) {
            if (error) {

                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
            }
        });
    },

    update: function (datos, callback) {
        connection.query('UPDATE bill SET `provider`=?, `date`=?, `reference`=?, type=? WHERE (`id`=?) LIMIT 1', [datos.provider, new Date(datos.date).toLocaleDateString(), datos.reference.toUpperCase(), datos.type, datos.id], function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
            }
        });
    },

    updateAdmin: function (datos, callback) {
        connection.query('UPDATE bill SET `provider`=?, `date`=?, `reference`=?, type=?, state=? WHERE (`id`=?) LIMIT 1', [datos.provider, new Date(datos.date).toLocaleDateString(), datos.reference.toUpperCase(), datos.type,datos.state, datos.id], function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
            }
        });
    },

    delete: function (datos, callback) {
        connection.query('DELETE FROM bill WHERE id=?', [datos.id], function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
            }
        });
    },


    create: function (datos, callback) {

        connection.query('INSERT INTO bill (provider, date, reference, type, user) VALUES (?,?,?,?,?)', [datos.provider, new Date(datos.date).toLocaleDateString(), datos.reference.toUpperCase(), datos.type, datos.user], function (error, results, fields) {
            if (error) {
             
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
            }
        });
    },

    closeBill: function (data, callback) {
        connection.query({
            sql: "UPDATE `bill` SET `state`='1' WHERE (`id`=?)",
            values: [data.code]
        }, function (error, results, fields) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });

    }
}
