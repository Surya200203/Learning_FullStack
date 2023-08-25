const figlet = require("figlet");

figlet('You Have Been Hacked ! ', function (err, data) {
	if (err) {
		console.log('Something went wrong...');
		console.dir(err);
		return;
	}
	console.log(data);
});