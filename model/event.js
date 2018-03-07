var connection = require('../config/connection.js');

module.exports={

    read: function(callback) {
      connection.query({
          sql: 'SELECT * FROM event ORDER BY id DESC'
      }, function(err, result, fields) {
          if (err) {
              callback(err,null);
          } else {
              callback(null, result);
          }
      })  
    },

    readError: function(callback) {
        connection.query({
            sql: 'SELECT * FROM error ORDER BY id DESC'
        }, function(err, result, fields) {
            if (err) {
                callback(err,null);
            } else {
                callback(null, result);
            }
        })  
      },

    create:function(data, callback) {
        connection.query({
            sql: 'INSERT INTO event SET ?',
            values: data
        }, function(err, results, fields) {
            if (err) {
                callback(err);
            } else {
                callback(results);
            }
        })
    },

    createError:function(error,user,table,callback) {
     
        connection.query({
            sql: 'INSERT INTO error(type,message,user,`table`) VALUES(?,?,?,?)',
            values: [error.code,error.sqlMessage,user,table]
        },function(err, result, fields) {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(result);
            }
        })
    }

}