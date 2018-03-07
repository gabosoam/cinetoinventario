var connection = require('../config/connection.js');
module.exports = {

    read: function (callback) {
        connection.query('SELECT  * FROM client ORDER BY name;', function (error, results, fields) {
            if (error) {

                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
            }
        });
    },

    read2: function (callback) {
        connection.query('SELECT  * FROM v_client ORDER BY text;', function (error, results, fields) {
            if (error) {

                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    readOne: function (callback) {
        connection.query('SELECT  * FROM v_client;', function (error, results, fields) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);

            }
        });
    },

    update: function (datos, callback) {
        connection.query('UPDATE `client` SET `dni`=?,`name`=?,`address`=?, `phone`=?, email=? WHERE (`id`=?) LIMIT 1', [datos.dni, datos.name.toUpperCase(), datos.address.toUpperCase(), datos.phone, datos.email, datos.id], function (error, results, fields) {//
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    delete: function (datos, callback) {
        connection.query('DELETE FROM client WHERE id=?', [datos.id], function (error, results, fields) {//
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },


    create: function (datos, callback) {
        connection.query('INSERT INTO client(dni, name, address, phone,email) VALUES(?,?,?,?,?)', [datos.dni, datos.name.toUpperCase(), datos.address.toUpperCase(), datos.phone, datos.email], function (error, results, fields) {//
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },




}