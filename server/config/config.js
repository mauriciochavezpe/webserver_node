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
urlDB = `mongodb+srv://superroot:1234567890@cluster0.dflv3.mongodb.net/Trabajo?retryWrites=true&w=majority`;
}

process.env.URLDB = urlDB;