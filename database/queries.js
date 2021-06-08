const connection = require('./index.js');

//===========================
//      ENTER USER INFO
//===========================

const postUsers = (user, cb) => {
  connection.query('INSERT INTO users VALUES (?, ?)', user, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

module.exports = {
  postUsers;
}