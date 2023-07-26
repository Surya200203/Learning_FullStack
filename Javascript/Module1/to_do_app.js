let todo = [];

let request = prompt('Please Enter your request.');

console.log(request);

while (true) {
	if (request == 'quit') {
		console.log('Quiting app');
		break;
	} else if (request == 'list') {
		console.log('------------------------------------------');
		for (task of todo) {
			console.log(task);
		}
		console.log('------------------------------------------');
	} else if (request == 'add') {
		let task = prompt('Please enter the task you want to add .');
		todo.push(task);
		console.log('Task Added');
	} else if (request == 'delete') {
		let index = prompt('Enter the task index');
		todo.splice(index, 1);
	}
    else{
        console.log("Worng request. Please try again!!");
    }
	request = prompt('Please Enter your request.');
}
