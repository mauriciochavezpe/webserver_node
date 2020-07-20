require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const indexRoute = require('./routes/index');
const conexion = require('./config/conexion');

app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json());

app.use(indexRoute);

conexion();

app.listen(process.env.PORT, () => {
    console.log("Escuchando el puerto 8080")
});