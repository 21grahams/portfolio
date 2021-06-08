const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const db = require('../database/queries.js')

//=====================
///// Middleware //////
//=====================
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "dist")));
app.use(cors());

//=====================
/////   Routes   //////
//=====================

// get request
app.get('/users', (req, res) => {
  console.log('getting anything?')
  db.getUsers('SELECT * from users', (err, results) => {
    if (err) {
      res.send(401).status('error with get request: ', err);
    } else {
      res.send(200).status('get request successful: ', results);
    }
  })
});

// post request
app.post('/users', (req, res) => {
  let friends = [req.body.name, req.body.email, req.body.message];
  db.postUsers(friends, (err, results) => {
    if (err) {
      res.status(401).send('Error with post request: ', err);
    } else {
      res.status(201).send("POSTED!");
    }
  });
})

//=================================
/////// Spin Up The Server ////////
//=================================
app.listen(port, () => {
  console.log(`Graham's Portfolio App listening at http://localhost:${port}`)
})