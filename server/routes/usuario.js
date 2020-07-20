const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

var Users = require('../models/usuario');
const _ = require('underscore');
const { authToken, verificacion_role} = require('../middlewares/authentication');


app.get('/',[authToken], function (req, res) {
    var desde = (req.query.desde) || 0;
    desde = Number(desde);
    var hasta = req.query.hasta || 5;
    hasta = Number(hasta);
    var id = req.params.id;
    Users.find({
            estado: true
        }, 'nombre role estado email')
        .skip(desde)
        .limit(hasta)
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }

            Users.countDocuments({}, (err, cantidad) => {

                res.json({
                    ok: true,
                    usuarios,
                    cantidad
                })
            })
        });

})

app.post('/usuario',[authToken,verificacion_role], function (req, res) {
    // res.json('post Usuario');

    var data = req.body;
    let usuario = new Users({
        nombre: data.nombre,
        email: data.email,
        password: bcrypt.hashSync(data.password, 10),
        img: data.img,
        role: data.role,
        estado: data.estado,
        google: data.google
    })

    usuario.save((err, response) => {
        if (err) {
            // seteamos el error
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            usuario: response
        })
    })
})

app.put('/usuario/:id',[authToken], function (req, res) {

    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email', 'role', 'estado']);
    // Users.useFindAndModify()
    Users.findByIdAndUpdate(id, body, {
        new: true
    }, (error, usuarioDB) => {
        if (error) {
            return res.status(400).json({
                ok: false,
                mensaje: error
            });
        }
        res.json({
            ok: true,
            usuario: usuarioDB
        })

    })
    // usuario.
})

app.delete('/usuario/:id',[authToken], function (req, res) {

    let id = req.params.id;
    let body = req.body;

    // Users.findByIdAndRemove(id, (err, usuarioborrado) => {
    Users.findByIdAndUpdate(id, body, {
        new: true
    }, (err, usuario) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                err: 'No hay usuario'
            })
        }
        res.json({
            ok: true,
            usuario
        })
    })

})
module.exports = app;