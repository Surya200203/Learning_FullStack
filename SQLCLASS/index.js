const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
let port = 8080;
const path = require('path');

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))

// create the connection to database
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'delta_app',
	password: 'mysql@12',
});

//get request for home (HOME ROUTE)

app.get('/', (req, res) => {
	let q = 'SELECT count(*) FROM user';
	try {
		connection.query(q, (err, result) => {
			if (err) throw err;
			let count = result[0]['count(*)'];
			res.render("home.ejs",{count});  // rendering home.ejs and passing count to home.ejs
		});
	} catch (err) {
		console.log(err);
		res.send('some error in database');
	}
});

//get request for getting all user's data (USERS ROUTE)

app.get('/user', (req, res) => {
	let q = 'SELECT * FROM user';
	try {
		connection.query(q, (err, result) => {
			if (err) throw err;
			let users = result;
			res.render("users.ejs",{users}); 
			 
		});
	} catch (err) {
		console.log(err);
		res.send('some error in database');
	}
});

//starting server
app.listen(port, () => {
	console.log(`App listening at portn ${port}`);
});
