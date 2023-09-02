const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const mysql = require('mysql');
const dotenv = require('dotenv').config();

const app = express();

//const { con } = require('./db.js');


app.use(express.json());
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);


const { con } = require('./db.js');

// Lets create a user and store data to db...
//app.post('/api/users', (req, res) => {
//   if (req.query.name && req.query.username && req.query.email && req.query.age && req.query.password) {
//       console.log('Request recieved');
//   con.connect(function(err) {
//   con.query(`INSERT INTO identity.users (name, username, email, age, password) VALUES ('${req.query.name}', '${req.query.username}', '${req.query.email}', '${req.query.age}', '${req.query.password}')`, function(err, result, fields) {
	//return error if any
//        if (err) res.send(err);
	//return body if successful
//        if (result) res.send({name: req.query.name, username: req.query.username, email: req.query.email, age: req.query.age, password: req.query.password});
//        if (fields) console.log(fields);
//             });
//        });
//      } else {
//          console.log('Missing a parameter');
//      }
//});

//app.use('/api/users', require('./routes/userRoutes'));

const port = process.env.PORT || 5000;
app.listen(port, () => { 
  console.log(`Server up and running on port ${port}`);
});

module.exports = app;
