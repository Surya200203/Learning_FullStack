// requering express and setting port
const express = require('express');
const app = express();
const port = 3000;
const path = require("path");

// setting view engine as ejs
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"/views"));

//using static files
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));



// server listening request
app.listen(port, (req, res) => {
	console.log(`app listening on port ${port}`);
});

//get (using res.send())

// app.get("/",(req,res)=>{
//     res.send("<h1>this is home</h1>");
// })

// get using res.render();
app.get('/', (req, res) => {
	res.render('home.ejs');
});

// rolldice
app.get("/rolldice",(req,res)=>{
    let diceValue = Math.floor(Math.random() * 6) + 1;  // data cpme from database
    res.render("rolldice.ejs",{num : diceValue});
});

// instgram
//  app.get("/ig/:username",(req,res)=>{
//     const followers =['sahil','yash','rohan','sumit'];
//     let {username} = req.params;
//     res.render("instgram.ejs",{username,followers});

//  });
 app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render('instgram.ejs', { data });
    }else{
        res.render('error.ejs')
    }
    

 });

//EJS Tags

/*
Tags
<% 'Scriptlet' tag, for control-flow, no output
<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

*/