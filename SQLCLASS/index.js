const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
let port = 8080;
const path = require('path');
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true})); // to parse patch request data
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

//EDIT ROUTE

app.get("/user/:id/edit",(req,res)=>{
	let {id} =req.params;
	let q1 = `SELECT * FROM user WHERE id='${id}'`;
	try {
		connection.query(q1, (err, result) => {
			if (err) throw err;
			let user = result[0];
			// console.log(user);
			res.render('editForm.ejs',{user});
		});
	} catch (err) {
		console.log(err);
		res.send('some error in database');
	}
	
})

//Update (DB) route

app.patch("/user/:id",(req,res)=>{
	let {id} = req.params;
	let q2 = `SELECT * FROM user WHERE id='${id}'`;
	let { password: fromPassword, username: newUsername } = req.body;

	try {
		connection.query(q2, (err, result) => {
			if (err) throw err;
			let user = result[0];
			if(fromPassword != user.password){
				res.send("WRONG password")
			}else{
				let q3 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
				connection.query(q3,(err,result)=>{
					if(err) throw err;
					res.redirect("/user");
				});
			}

		});
	} catch (err) {
		console.log(err);
		res.send('some error in database');
	}

})


//starting server
app.listen(port, () => {
	console.log(`App listening at portn ${port}`);
});
