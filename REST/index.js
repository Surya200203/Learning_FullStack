const express = require('express');
const app = express();
const port = 8080;
const path = require('path'); //requiring path of public and views dir.
const { v4: uuidv4 } = require('uuid'); //requiring uuid v4 from uuid package
const methodOverride = require('method-override'); // requering method-override a=package

app.use(express.urlencoded({ extended: true })); // to parse encoded data we get from user
app.use(methodOverride('_method')); // overide with POST having ?_method=PATCH or DELETE

app.set('view engine', 'ejs'); // setting view engine
app.set('views', path.join(__dirname, 'views')); // setting path for views to access files of views dir..

app.use(express.static(path.join(__dirname, 'public'))); // setting path for views to access ststic files of public dir..

app.listen(port, () => {
	console.log('listening to port : 8080');
});

// temporary database
let posts = [
	{
		id: uuidv4(),
		username: 'sanket12',
		content: 'I love coding',
	},
	{
		id: uuidv4(),
		username: 'sahil21',
		content: 'I am learning full stack development',
	},
	{
		id: uuidv4(),
		username: 'yash10',
		content: 'I got selected for my first internship at Salesforce.',
	},
];

app.get('/posts', (req, res) => {
	res.render('index.ejs', { posts });
});

app.get('/posts/new', (req, res) => {
	res.render('new.ejs');
});

app.post('/posts', (req, res) => {
	let { username, content } = req.body;
	let id = uuidv4();
	posts.push({ id, username, content });
	res.redirect('/posts');
});

app.get('/posts/:id', (req, res) => {
	let { id } = req.params;
	let post = posts.find((p) => id === p.id); // gives id matches post
	res.render('show.ejs', { post });
});

app.patch('/posts/:id', (req, res) => {
	let { id } = req.params;
	let newContent = req.body.content;
	let post = posts.find((p) => id === p.id);
	post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get('/posts/:id/edit', (req, res) => {
	let { id } = req.params;
	let post = posts.find((p) => id === p.id);
	res.render('edit.ejs', { post });
	
});

app.delete('/posts/:id', (req, res) => {
	let { id } = req.params;
	posts = posts.filter((p) => id !== p.id); //filer posts without given username and save them again in posts
	// res.send("delete sucess");
	res.redirect('/posts');
});