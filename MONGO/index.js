// Requiring mongoose
const mongoose = require('mongoose');

main()
	.then((res) => {
		console.log(res);
	})
	.catch((err) => console.log(err)); // running main() function

//connecting with mongoDB database using async function main()
async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/test');

	// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
