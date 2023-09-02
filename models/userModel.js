const mysql = require('mysql');

const con = require('../db.js');

const Users = function(users) {
	  this.name = users.name;
	  this.username = users.username;
	  this.email = users.email;
	  this.age = users.age;
	  this.password = users.password;
};

Users.create = (createUser, result) => {
  con.query("INSERT INTO users SET ?", createUser, (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(err, null);
         return;
          }

	  console.log("created users: ", { id: res.insertId, ...createUser });
	  result(null, { id: res.insertId, ...createUser });
	});
};

module.exports = Users
