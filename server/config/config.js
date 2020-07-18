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
// process.env.NODE_ENV = 'produccion';
/**
 * 
 * DB CONNECT
 */

let urlDB;

if (process.env.NODE_ENV == 'dev') {
    urlDB = 'mongodb://localhost:27017/Trabajo'
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;