const mysql2 = require('mysql2');

const db = mysql2.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'123456',
  database:'my_shopping_db'
})

module.exports = db;
