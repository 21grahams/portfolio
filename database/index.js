const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'portfolio',
  password: 'password'
});

connection.connect((err) => {
  if (err) {
    console.log('Error Connecting to Database');
  } else {
    console.log('Connected to Graham\'s Portfolio Database!')
  }
})

exports.connection = connection;