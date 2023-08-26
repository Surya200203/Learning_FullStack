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

// app.get(path,callback)

 //using get

app.get("/",(req,res)=>{
    res.send("Hello,  I am root.");
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

// app.post() request

app.post("/",(req,res)=>{
    res.send("You sent a post request.");
})
*/

app.get("/",(req,res)=>{
    res.send("<h1>Hello, I am root.</h1>");
}
);

// Path parameters

app.get("/:username/:id",(req,res)=>{
    // console.log(req.params);
    let {username,id} = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}.</h1>`;
    res.send(htmlStr);
});

//
app.get("/:search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("<h1>No search query</h1>");
    }
    res.send(`<h1>These are the results for ${q}</h1>`);
})