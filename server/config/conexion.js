const mongoose = require('mongoose');
var conexion = () => {
    mongoose.connect(process.env.URLDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        },
        (err, res) => {
            if (err) throw err;
            console.log("conexión establecida")

        });

}
module.exports = conexion;