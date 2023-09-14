// const { faker } = require('@faker-js/faker');
// const mysql = require('mysql2');
// const express = require('express');
// const app = express();
// let port = 3000;

// // create the connection to database
// const connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	database: 'delta_app',
// 	password: 'mysql@12',
// });

// //Query

// // for single user insertion
// // let q = "INSERT INTO user(id,username,email,password) VALUES (?,?,?,?)";
// // let user = ["123","123_newuser","abc@gmail.com","abc"];

// // for multiple user insertion
// // let q = "INSERT INTO user(id,username,email,password) VALUES ?";
// // let users = [["123c","123_newuserc","abc@gmail.comc","abcc"],["123b","123_newuserb","abc@gmail.comb","abcb"]];

// // generating random data

// let getRandomUser = () => {
// 	return [
// 		faker.datatype.uuid(),
// 		faker.internet.userName(),
// 		faker.internet.email(),
// 		faker.internet.password(),
// 	];
// };

// //using facker (bulk insertion)
// // let q = "INSERT INTO user(id,username,email,password) VALUES ?";
// // let q = "SELECT count(*) FROM user";

// // let data =[];

// // for(let i=1;i<=100;i++){
// //     data.push(getRandomUser()); // 100 fake users data

// // }

// // connection.end(); //to end connection with mysql

// //get request for home

// app.get('/', (req, res) => {
// 	let q = 'SELECT count(*) FROM user`';
// 	try {
// 		connection.query(q, (err, result) => {
// 			if (err) throw err;
// 			console.log(result);
// 			res.send(result);
// 		});
// 	} catch (err) {
// 		console.log(err);
// 		res.send('some error in database');
// 	}
// });

// //starting server
// app.listen(port, () => {
// 	console.log(`App listening at portn ${port}`);
// });

// // try {
// // 	connection.query(q, (err, result) => {
// // 		if (err) throw err;
// // 		console.log(result);
// // 	});
// // } catch (err) {
// // 	console.log(err);
// // }

// connection.end(); //to end connection with mysql
