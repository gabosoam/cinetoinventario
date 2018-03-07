var connection = require('../config/connection.js');


module.exports = {
  read: function (callback) {
    connection.query('SELECT  * FROM voucher ORDER BY id DESC', function (error, results, fields) {
      if (error) {
        callback('error en la consulta: ' + error, null);
      } else {

        callback(null, results);
      }
    });
  },

  read2: function (voucher, callback) {
    connection.query('CALL prueba(?)', voucher, function (error, results, fields) {
      if (error) {
        callback('error en la consulta: ' + error, null);
      } else {
      
        callback(null, results[0]);
      }
    });
  },

  readOne: function (voucher, callback) {
    connection.query('SELECT  * FROM v_voucher WHERE id=?;', voucher, function (error, results, fields) {
      if (error) {
        callback('error en la consulta: ' + error, null);
      } else {
        callback(null, results);

      }
    });
  },

  update: function (datos, callback) {
    connection.query('UPDATE voucher SET `client`=?, `date`=?, `reference`=? WHERE (`id`=?) LIMIT 1', [datos.client, new Date(datos.date).toLocaleDateString(), datos.reference.toUpperCase(), datos.id], function (error, results, fields) {//
      if (error) {

        callback('error en la consulta: ' + error, null);
      } else {

        callback(null, results);

      }
    });
  },
  updateAdmin: function (datos, callback) {
    connection.query('UPDATE voucher SET state=?, `client`=?, `date`=?, `reference`=? WHERE (`id`=?) LIMIT 1', [datos.state,datos.client, new Date(datos.date).toLocaleDateString(), datos.reference.toUpperCase(), datos.id], function (error, results, fields) {//
      if (error) {

        callback('error en la consulta: ' + error, null);
      } else {

        callback(null, results);

      }
    });
  },
  delete: function (datos, callback) {
    connection.query('DELETE FROM voucher WHERE id=?', [datos.id], function (error, results, fields) {
      if (error) {
        callback('error en la consulta: ' + error, null);
      } else {
        if (results.affectedRows == 0) {
          callback('no se puede eliminar', null);
        } else {
          callback(null, results);
        }

      }
    });
  },


  create: function (datos, callback) {
    connection.query('INSERT INTO voucher (client, date, reference, type, user) VALUES (?,?,?,?,?)', [datos.client, new Date(datos.date).toLocaleDateString(), datos.reference.toUpperCase(), datos.type, datos.user], function (error, results, fields) {
      if (error) {
        callback('error en la consulta: ' + error, null);
      } else {
        callback(null, results);

      }
    });
  },

  closeVoucher: function (data, callback) {
    connection.query({
      sql: "UPDATE `voucher` SET `state`='1'  WHERE (`id`=?)",
      values: [data.code]
    }, function (error, results, fields) {
      if (error) {
        callback(error, null);
      } else {

        connection.query({
          sql:"SELECT product.id, detail.voucher FROM detail INNER JOIN product ON detail.product = product.id WHERE voucher = ?",
          values:[data.code]
        }, function(error, results, fields) {
          var sql = 'UPDATE product SET state=1, location=null WHERE '+createquery(results);
          connection.query({
            sql: sql
          }, function(error, results, fields) {
            if (error) {
              callback(error, null);
            } else {
              callback(null, results);
            }
          })
        
        })
      }
    });

  }
}


function createquery(data) {
  var sql = '';

  for (var i = 0; i < data.length; i++) {
    sql+='id='+data[i].id+' OR ';
    
  }

  return sql.slice(0, -3);
  
}