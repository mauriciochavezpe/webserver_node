/**
 * 
 * PORT
 */

process.env.PORT = process.env.PORT || 3000

/**
 * 
 * ENVIROMEND
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


/**
 * 
 * FECHA DE CADUCIDAD DE TOKEN
 */
//seg * min * hor*dias
process.env.CADUCIDAD = 60 * 60 * 60;

/**
 * 
 * llave secreta
 */

process.env.SECRET = process.env.SECRET || 'llave_secreta';
/**
 * 
 * DB CONNECT
 */

let urlDB;

urlDB = (process.env.NODE_ENV == 'dev') ? 'mongodb://localhost:27017/Trabajo' : process.env.MONGO_URI;
// if (process.env.NODE_ENV == 'dev') {
//     urlDB = 'mongodb://localhost:27017/Trabajo'
// } else {
//     urlDB = process.env.MONGO_URI;
// }

process.env.URLDB = urlDB;