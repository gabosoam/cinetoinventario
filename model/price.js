var connection = require('../config/connection.js');


module.exports = {
  read: function (callback) {
    connection.query('SELECT  * FROM price;', function (error, results, fields) {
      if (error) {
        callback('error en la consulta: ' + error, null);
      } else {
        callback(null, results);
      }
    });
  },

  update: function (datos, callback) {
    connection.query('UPDATE price SET variant=?,price=?,size=?,description=? WHERE (id=?) LIMIT 1', [datos.variant,datos.price, datos.size, datos.description.toUpperCase(),datos.id], function (error, results, fields) {//
      if (error) {

        callback('error en la consulta: ' + error, null);
      } else {
        callback(null, results);
        
      }
    });
  },

  delete: function (datos, callback) {
    connection.query('DELETE FROM price WHERE id=?', [datos.id], function (error, results, fields) {//
      if (error) {
        callback('error en la consulta: ' + error, null);
      } else {
        callback(null, results);
        
      }
    });
  },

  create: function (datos, callback) {
    connection.query('INSERT INTO price (variant, price, size, description) VALUES (?, ?, ?, ?)', [datos.variant,datos.price,datos.size,datos.description.toUpperCase()], function (error, results, fields) {//
      if (error) {
        callback('error en la consulta: ' + error, null);
      } else {
        callback(null, results);
        
      }
    });
  }
}
