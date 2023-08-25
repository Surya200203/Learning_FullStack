// Act as server

const express = require('express');
const app = express();
const port = 8080;

// console.dir(app);

// App is listening for request
app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});

/*
// app.use

app.use((req, res) => {
	console.log('new incoming request');
	// res.send("this is a basic response");
	res.send({
		fruit: 'apple',
		color: 'red',
		price: '100',
	});
    });
*/

// app.get(path,callback)

 //using get

app.get("/",(req,res)=>{
    res.send("You contacted root path");
})

app.get("/apple",(req,res)=>{
    res.send({
        name:"apple",
        color:"red",
        taste:"sweet",
        
    })
});
app.get("/mango",(req,res)=>{
    res.send({
        name:"mango",
        color:"yellow or orange",
        taste:"sweet",

    })
});
app.get("*",(req,res)=>{
    res.send("ThisPath does not exist.")
})
