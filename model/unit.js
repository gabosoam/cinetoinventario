var connection = require('../config/connection.js');


module.exports = {
    read: function (callback) {
        connection.query('SELECT  * FROM unit;', function (error, results, fields) {
            if (error) {
          
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
                
            }
        });
    },
    read2: function (callback) {
        connection.query('SELECT  * FROM v_unit;', function (error, results, fields) {
            if (error) {
          
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
                
            }
        });
    },

    update: function (datos, callback) {
        connection.query('UPDATE unit SET description=?, smallDescription=? WHERE (id=?) LIMIT 1', [datos.description.toUpperCase(), datos.smallDescription.toUpperCase(),datos.id], function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
                
            }
        });
    },

    delete: function (datos, callback) {
        connection.query('DELETE FROM unit WHERE id=?', [datos.id], function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {


                callback(null, results);

                
            }
        });
    },
    create: function (datos, callback) {
        connection.query('INSERT INTO unit(description,smallDescription) VALUES(?,?)', [datos.description.toUpperCase(), datos.smallDescription.toUpperCase()], function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);
                
            }
        });
    },
}
