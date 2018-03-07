var connection = require('../config/connection.js');

module.exports = {

    read: function (callback) {
        connection.query('SELECT  * FROM location ORDER BY name;', function (error, results, fields) {
            if (error) {
 
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
                
            }
        });
    },

    read2: function (callback) {
        connection.query('SELECT  * FROM v_location ORDER BY text;', function (error, results, fields) {
            if (error) {
 
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
                
            }
        });
    },

    update: function (datos, callback) {
        connection.query('UPDATE `location` SET `name`=?,`description`=? WHERE (`id`=?) LIMIT 1', [datos.name.toUpperCase(),datos.description.toUpperCase(),datos.id], function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {


                callback(null, results);

                
            }
        });
    },

    delete: function (datos, callback) {
        connection.query('DELETE FROM location WHERE id=?', [datos.id], function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
                
            }
        });
    },


    create: function (datos, callback) {
        connection.query('INSERT INTO location(name, description) VALUES(?, ?)', [datos.name.toUpperCase(),datos.description.toUpperCase()], function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
                
            }
        });
    },




}