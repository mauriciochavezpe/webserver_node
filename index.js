require('./config/config')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// app.use(express.static(__dirname + '/public'));
// parser application/x---www-form-urlencode
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json());



app.get('/', function (req, res) {
    res.json('get Usuario');
})
app.post('/post', function (req, res) {
    res.json('post Usuario');
})
app.put('/usuario/:id', function (req, res) {
    res.json('update Usuario');
})
app.delete('/usuario', function (req, res) {
    res.json('delete Usuario');
})

// http.createServer((req,res)=>{
//     res.write('Hola mundo')
//     res.end()
// })


app.listen(process.env.PORT, () => {
    console.log("Escuchando el puerto 8080")
});