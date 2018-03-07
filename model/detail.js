
var bcrypt = require('bcrypt-nodejs');
var generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}
var connection = require('../config/connection.js');


module.exports = {

  read: function (callback) {
    connection.query('SELECT  * FROM bill;', function (error, results, fields) {
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

  updateFromVaucher: function(data,cb) {
    connection.query({
      sql: 'UPDATE `detail` SET `observation`=? WHERE (`id`=?)',
      values: [data.observation.toUpperCase(), data.id]
    }, function(err, results, fields) {
      if (err) {
        console.log(err);
        cb(err,null);
      } else {
        cb(null, results)
      }
    })
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

  delete: function (data, callback) {


    connection.query('DELETE FROM detail WHERE id=?', [data.id], function (error, results, fields) {//
      if (error) {
        callback('error en la consulta: ' + error, null);
      } else {

        if (results.affectedRows==1) {

          connection.query({
            sql: "UPDATE `product` SET `state`='0' WHERE (`id`=?)",
            values: [data.idproduct]
          }, function (error, results, fields) {
            if (error) {
              console.log(error);
              callback(error, null);
            } else {
              callback(null, results);
            }
          });
        } else {

        }

      }
    });
  },


  create: function (data, callback) {

    connection.query('SELECT * FROM v_product WHERE barcode= ? LIMIT 1', [data.serie], function (error, results, fields) {
      if (results[0]) {
        if (results[0].billstate == 1) {
          if (results[0].stateid == 0) {

            connection.query('INSERT INTO detail(voucher,product,observation) VALUES(?,?,?)', [data.voucher, results[0].id, data.observation.toUpperCase()], function (e, r, f) {
              if (e) {
                callback(e, null);
              } else {
                connection.query("UPDATE `product` SET `state`='2' WHERE (`id`=?)", [results[0].id], function (er, re, fi) {
                  if (er) {
                    console.log(er);
                    callback(er, null);
                  } else {
                    callback(null, 'Se registro la salida satisfactoriamente');
                  }
                });
              }
            });
          } else {
            if (results[0].stateid == 1) {
              callback('El producto se encuentra entregado', null);
            } else if (results[0].stateid == 2) {
              callback('El producto se encuentra reservado', null);
            }
          }
        } else {
          callback('El ingreso del producto no ha sido cerrado aún', null);
        }
      } else {
        callback('No existe el producto', null);
      }

    })

  },

  createserial: function (data, callback) {

    console.log(data)
    
        connection.query('SELECT * FROM v_product WHERE barcode= ? AND code=? AND billstate=1 AND stateid = 0', [data.serie, data.code], function (error, results, fields) {
          if (error) {
            callback(error,null);
          } else {
            if (data.cant<= results.length) {

              for (var i = 0; i < data.cant; i++) {
                var value = results[i].id;
                console.log(value);
                connection.query('INSERT INTO detail(voucher,product,observation) VALUES(?,?,?)', [data.voucher, value, data.observation.toUpperCase()], function (e, r, f) {
                  if (e) {
                    callback(e, null);
                  } else {
                  }
                });
                
              }

              for (var i = 0; i < data.cant; i++) {
                var value = results[i].id;
                console.log(value);
                connection.query("UPDATE `product` SET `state`='2' WHERE (`id`=?)", value, function (er, re, fi) {
                  if (er) {
                    console.log(er);
                    callback(er, null);
                  } else {
                    console.log(re);
                  }
                });
                
              }
              callback(null, 'Se registro la salida satisfactoriamente');
              
            } else {
              callback(null,'Disponibles: '+results.length+' de '+data.cant+' solicitados');
            }
           
          }
    
        })
    
      },
}
