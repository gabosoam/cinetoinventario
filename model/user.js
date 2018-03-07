var connection = require('../config/connection.js');


var bcrypt = require('bcrypt-nodejs');

var generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

module.exports = {
    read: function (callback) {
        connection.query('SELECT  * FROM user ORDER BY name;', function (error, results, fields) {
            if (error) {

                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);

            }
        });
    },

    read2: function (callback) {
        connection.query('SELECT  * FROM v_user ORDER BY text;', function (error, results, fields) {
            if (error) {
                console.log(error);

                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);

            }
        });
    },

    update: function (datos, callback) {
        connection.query('UPDATE `user` SET `name`=?,`lastname`=?,`username`=?, `rol`=?, email=?, status=? WHERE (`id`=?) LIMIT 1', [datos.name.toUpperCase(), datos.lastname.toUpperCase(), datos.username, datos.rol, datos.email, datos.status, datos.id], function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);

            }
        });
    },

    updatePass: function (datos, callback) {
        connection.query('SELECT * from user WHERE `user`.id= ? ', [datos.user], function (e, r, f) {
            if (r[0]) {
                if (bcrypt.compareSync(datos.Anterior, r[0].password)) {

                    if (datos.Nueva == datos.Confirm) {
                        connection.query('UPDATE `user` SET `password`=? WHERE (`id`=?)', [generateHash(datos.Nueva), datos.user], function (errr, res, fiel) {
                            if (errr) {

                                callback('Existio un error al modificar la contraseña', null);

                            } else {
                                callback(null, 'Contraseña modificada con éxito');

                            }

                        });


                    } else {
                        callback('Las contraseñá no coinciden', null);

                    }


                } else {
                    callback('Contraseña anterior incorrecta', null);
                }
            }


        });
    },

    delete: function (datos, callback) {
        connection.query('DELETE FROM user WHERE id=?', [datos.id], function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);

            }
        });
    },


    create: function (datos, callback) {
        connection.query('INSERT INTO user(name, lastname, username, rol,email,password,status) VALUES(?, ?, ?,?,?,?,?)', [datos.name.toUpperCase(), datos.lastname.toUpperCase(), datos.username, datos.rol, datos.email, generateHash(datos.username), datos.status], function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);
            } else {
                callback(null, results);

            }
        });
    },

    login: function (user, callback) {
        connection.query('SELECT * FROM user WHERE username = ?', user.username, function (error, results, fields) {//
            if (error) {
                callback('error en la consulta: ' + error, null);

            } else {
                var usuarioDatos = {};
                if (results[0]) {
                    if (bcrypt.compareSync(user.password, results[0].password)) {
                        if (results[0].status == 0) {
                            callback('El usuario se encuentra desactivado', null);
                        } else {
                            usuarioDatos = {
                                id: results[0].id,
                                name: results[0].name + ' ' + results[0].lastname,
                                username: results[0].username,
                                email: results[0].email,
                                rol: results[0].rol
                            };
                            callback(null, usuarioDatos);

                        }
                    } else {
                        callback('La contraseña es incorrecta', null);
                    }

                } else {
                    callback('El usuario no existe', null);
                }
            }


        });
    }
}
