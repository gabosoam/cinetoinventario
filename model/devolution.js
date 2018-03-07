var connection = require('../config/connection.js');


module.exports = {
  read: function (callback) {
    connection.query('SELECT  * FROM devolution ORDER BY id DESC', function (error, results, fields) {
      if (error) {
        callback('error en la consulta: ' + error, null);
      } else {

        callback(null, results);
      }
    });
  },

  read2: function (voucher, callback) {
    connection.query('SELECT * FROM v_clientdev WHERE idclient=?',voucher, function (error, results, fields) {
      if (error) {
        callback('error en la consulta: ' + error, null);
      } else {
      
        callback(null, results);
      }
    });
  },

  readDetail: function (voucher, callback) {
    connection.query('CALL devolution(?)', voucher, function (error, results, fields) {
      if (error) {
        callback('error en la consulta: ' + error, null);
      } else {
      
        callback(null, results[0]);
      }
    });
  },

  readOne: function (voucher, callback) {
    connection.query('SELECT  * FROM v_devolution WHERE id=?;', voucher, function (error, results, fields) {
      if (error) {
        console.log(error);
        callback('error en la consulta: ' + error, null);
      } else {
        console.log(results);
        callback(null, results);

      }
    });
  },

  update: function (datos, callback) {
    connection.query('UPDATE devolution SET `client`=?, `date`=?, `reference`=? WHERE (`id`=?) LIMIT 1', [datos.client, new Date(datos.date).toLocaleDateString(), datos.reference.toUpperCase(), datos.id], function (error, results, fields) {//
      if (error) {

        callback('error en la consulta: ' + error, null);
      } else {

        callback(null, results);

      }
    });
  },
  updateAdmin: function (datos, callback) {
    connection.query('UPDATE devolution SET state=? WHERE (`id`=?) LIMIT 1', [datos.state, datos.id], function (error, results, fields) {//
      if (error) {

        callback('error en la consulta: ' + error, null);
      } else {

        callback(null, results);

      }
    });
  },
  delete: function (datos, callback) {
    connection.query('DELETE FROM devolution WHERE id=?', [datos.id], function (error, results, fields) {
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
    connection.query('INSERT INTO devolution (client, date, reference, type, user) VALUES (?,?,?,?,?)', [datos.client, new Date(datos.date).toLocaleDateString(), datos.reference.toUpperCase(), datos.type, datos.user], function (error, results, fields) {
      if (error) {
        callback('error en la consulta: ' + error, null);
      } else {
        callback(null, results);

      }
    });
  },

  closeVoucher: function (data, callback) {
    connection.query({
      sql: "UPDATE `devolution` SET `state`='1'  WHERE (`id`=?)",
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


function createquery(data) {
  var sql = '';

  for (var i = 0; i < data.length; i++) {
    sql+='id='+data[i].id+' OR ';
    
  }

  return sql.slice(0, -3);
  
}