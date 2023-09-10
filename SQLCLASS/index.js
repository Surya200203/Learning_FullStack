const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'delta_app',
	password: 'mysql@12',
});

//Query

// for single user insertion
// let q = "INSERT INTO user(id,username,email,password) VALUES (?,?,?,?)";
// let user = ["123","123_newuser","abc@gmail.com","abc"];

// for multiple user insertion
// let q = "INSERT INTO user(id,username,email,password) VALUES ?";
// let users = [["123c","123_newuserc","abc@gmail.comc","abcc"],["123b","123_newuserb","abc@gmail.comb","abcb"]];


// generating random data

let getRandomUser = () => {
	return [
		faker.datatype.uuid(),
		faker.internet.userName(),
		faker.internet.email(),
		faker.internet.password(),
	];
};


//using facker (bulk insertion)
let q = "INSERT INTO user(id,username,email,password) VALUES ?";

let data =[];

for(let i=1;i<=100;i++){
    data.push(getRandomUser()); // 100 fake users data
    
}

try {
	connection.query(q, [data], (err, result) => {
		if (err) throw err;
		console.log(result);
	});
} catch (err) {
	console.log(err);
}

connection.end(); //to end connection with mysql




