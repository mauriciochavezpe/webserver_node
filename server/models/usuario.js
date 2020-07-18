const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;


var role_valido = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un role valido'
}

let usuarioSchema = new Schema({
    // aqui ira lo que para un DB relacional seria las columnas
    nombre: {
        type: String,
        required: [true, 'El campo es requerido']
    },
    email: {
        type: String,
        required: [true, 'El campo es requerido'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false //opcional
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: role_valido
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});
usuarioSchema.methods.toJSON = function(){
    let user = this;
    var userObject = user.toObject();
    delete userObject.password;
    return userObject;
}
// mensaje de validacion
usuarioSchema.plugin(validator, {
    message: '{PATH} debe de ser único'
})
// creamos un modelo Usuario con las caracteristicas de usuarioSchema
module.exports = mongoose.model('Users', usuarioSchema);