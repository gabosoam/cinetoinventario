
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

        if (results.affectedRows == 1) {

          connection.query({
            sql: "UPDATE `product` SET `state`='0' WHERE (`id`=?)",
            values: [data.idproduct]
          }, function (error, results, fields) {
            if (error) {
           
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

    connection.query('SELECT * FROM v_product WHERE id= ? LIMIT 1', [data.serie], function (error, results, fields) {


      if (results[0]) {
        if (results[0].stateid == 1) {

          connection.query('select * FROM v_detail where idproduct=? AND idclient = (SELECT client from devolution WHERE id = ? LIMIT 1) AND state=0',
            [data.serie, data.voucher],
            function (e, r, f) {
              if (e) {
                console.log(e)
                callback('Existio un error', null);
              } else {
              
              
                if (r[0]) {
                
                    connection.query('INSERT INTO `detaildevolution` (`devolution`, `product`, `observation`) VALUES (?,?,?)',
                      [data.voucher, results[0].id, data.observation.toUpperCase()],
                      function (e1, r1, f1) {

                        if (e1) {
                          console.log(e1)
                          callback('Existio un error', null);
                        } else {
                 

                          if (r1.affectedRows > 0) {

                      
                            console.log('data '+r[0].voucher);
                            console.log('data '+r[0].idproduct);
                            connection.query("UPDATE `detail` SET `state`='1' WHERE (`voucher`=? AND product=? AND state=0)", [r[0].voucher,r[0].idproduct], function (er, re, fi) {
                              if (er) {
                                console.log(er)
                                callback('Existio un error', null)
                              } else {
                               
                                connection.query("UPDATE `product` SET `state`='0', location=? WHERE (`id`=?)", [data.location,results[0].id], function (er, re, fi) {
                                  if (er) {
                                
                                    callback(er, null);
                                  } else {
                                    callback(null, 'Se registro el retiro satisfactoriamente');
                                  }
                                });
                              }
                            });

                          
                          } else {
                            callback('Existio un error', null);
                          }

                        }

                      })
                  


                } else {
                  callback('El producto no se encuentra en el cliente', null);
                }

              }
            })

        } else {
          if (results[0].stateid == 0) {
            callback('El producto se encuentra en bodega', null);
          } else if (results[0].stateid == 2) {
            callback('El producto se encuentra reservado', null);
          }
        }

      } else {
        callback('No existe el producto', null);
      }

    })

  },
}
