require('./config/config')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const usuario = require('./routes/usuario');

app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json());

app.use(usuario);

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

app.listen(process.env.PORT, () => {
    console.log("Escuchando el puerto 8080")
});