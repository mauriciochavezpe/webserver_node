require('../config/config');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

var Usuario = require('../models/usuario');

app.post("/login", (req, res) => {
    var body = req.body;

    Usuario.findOne({
        email: body.email
    }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: '(Usuario) o contraseña no son validas'
            })
        }

        if (!usuarioDB) {
            return res.status(401).json({
                ok: false,
                err: 'Usuario o (contraseña) no son validas'
            })
        }

        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {

           return res.json({
                ok: false,
                err: 'Usuario o (contraseña) no son validas'
            })
        }
        var token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SECRET, {
            expiresIn: process.env.CADUCIDAD
        }, {
            algorithm: 'RS256'
        });
        return res.json({
            ok: true,
            usuarioDB,
            token
        })

    })
})

module.exports = app;