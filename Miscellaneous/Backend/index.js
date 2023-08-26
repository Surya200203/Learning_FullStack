const express = require("express");
const app = express();

const port = 8080;
//making data readable to express of response bosy OR Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json);


app.get("/register",(req,res)=>{
    let {user,password}=req.query;
    res.send(`standard GET response.Welcome ${user}`);
});

app.post("/register",(req,res)=>{
    console.log(req.body);
    let { user, password } = req.body;
    res.send(`standard POST response.Welcome ${user}`);
	
});

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})