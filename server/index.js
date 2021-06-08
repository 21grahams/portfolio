const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const db = require('../database/index.js')

//=====================
///// Middleware //////
//=====================
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "dist")));
app.use(cors);

//=====================
/////   Routes   //////
//=====================

// get request
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// post request
app.post('/users', (req, res) => {
  db.postUsers()
})

//=================================
/////// Spin Up The Server ////////
//=================================
app.listen(port, () => {
  console.log(`Graham's Portfolio App listening at http://localhost:${port}`)
})