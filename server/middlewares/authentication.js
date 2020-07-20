// require('../config/config');
var jwt = require('jsonwebtoken');
/**
 * 
 * VALIDACION DEL MIDDLEWARE
 */

var authToken = (req, res, next) => {
    let token = req.get('token');
     //request personalizado token
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            })

        }
        req.usuario = decoded.usuario;
        next();
    })
}

var verificacion_role = (req, res, next) => {
    var usuario = req.usuario;
    if (usuario.role !== 'ADMIN_ROLE') {
        return res.status(401).json({
            ok: false,
            err: {
                mensaje: 'El usuario no es un administrador'
            }
        })
    }
    next()
}

module.exports = {
    authToken,
    verificacion_role
}