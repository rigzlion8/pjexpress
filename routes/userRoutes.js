const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const app = express();
app.use(express.json());

const { con } = require('../db.js');

const { getUsers, 
        createUser, 
	getUser, 
	updateUser, 
	deleteUser 
      } = require('../controllers/userController');

router.route('/').get(getUsers);

router.route('/').post(createUser);

router.route('/:d').get(getUser);

router.route('/:id').put(updateUser);

router.route('/:id').delete(deleteUser);

module.exports = router;
