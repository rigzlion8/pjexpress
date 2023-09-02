const express = require('express');
const mysql = require('mysql');

const app = express();

const { con } = require('../db.js');

const Users = require('../models/userModel.js');

//@desc Get all users
//@route Get /api/users
//@access public

//const getUsers = (req, res) => {
//     const finduser = Users.find();
//    res.status(200).json( {message: "Getting there with a get"});
//    res.status(200).json(Users);
//};
const getUsers = (req, res) => {
    con.connect(function(err) {
    con.query(`SELECT * FROM identity.users`, function(err, result, fields) {
            if (err) res.send(err);
            if (result) res.send(result);
           });
    });
};

//@desc create new users
//@route POST /api/users
//@access public

const createUser = (req, res) => {
   console.log('The request body is:', req.body);
	const {name, username, email, age, password} = req.body;
  //if (req.query.name && req.query.username && req.query.email && req.query.age && req.query.password) {
     if (!name || !username || !email || !age || !password) {
	     res.status(400);
	     throw new Error('All fields are mandatory!');
     }
     if (req.body) { 
      console.log('Request received');
      con.connect(function(err) { 
        // con.query('USE identity;');
        //  con.query(`INSERT INTO identity.users (name, username, email, age, password) VALUES ('${req.query.name}','${req.query.username}', '${req.query.email}', '${req.query.age}', '${req.query.password}')`, function(err, result, fields) {
	con.query(`INSERT INTO identity.users (name, username, email, age, password) VALUES ('${req.body.name}','${req.body.username}', '${req.body.email}', '${req
		.body.age}', '${req.body.password}')`, function(err, result, fields) {
     if (err) res.send(err);
     if (result) res.send({name: req.query.name, username: req.query.username, email: req.query.email, age: req.query.age, password: req.query.password});
     if (fields) console.log(fields);
           });
        });
     } else {
          console.log('Missing a parameter');
     }
res.status(201).json({ message: "user created"});
};

//@desc Get single user
//@route POST /api/users/:id
//@access public

const getUser = (req, res) => {
   res.status(200).json({ message: `Get user for ${req.params.id}`});
};

//@desc Update user
//@route PUT /api/users/:id
//@access public

const updateUser = (req, res) => {
   res.status(200).json({ message: `Update user for ${req.params.id}`});
};

//@desc Delete users
//@route Delete /api/users/:id
//@access public

const deleteUser = (req, res) => {
   res.status(200).json({ message: `Deleted user for ${req.params.id}`});
};



module.exports = { getUsers, createUser, getUser, updateUser, deleteUser };
