const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'portfolio'
});

connection.connect((err) => {
  if (err) {
    console.log('Error Connecting to Database', err);
  } else {
    console.log('Connected to Graham\'s Portfolio Database!')
  }
});

module.exports = connection;