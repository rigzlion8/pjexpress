const mysql = require('mysql');
const dotenv = require('dotenv').config();
//const host = process.env.HOST;
//const user = process.env.USERNAME;
//const password = process.env.PASSWORD;

const con = mysql.createConnection({ 
	host: process.env.HOST,
	user: process.env.USERNAME,
	password: process.env.PASSWORD
});

con.connect(function(err) { 
	if (err) throw err;

	con.query('CREATE DATABASE IF NOT EXISTS identity;');
	con.query('USE identity;');
	con.query('CREATE TABLE IF NOT EXISTS users(id int NOT NULL AUTO_INCREMENT, name varchar(30), username varchar(30), email varchar(255), age int, password varchar(255), PRIMARY KEY(id));', function(error, result, fields) { 
		console.log(result);
	});
	//con.end();
});

module.exports = { con };
