import express from 'express';

const app = express();

app.get("/about",(req, res) => {
    res.send("hello world");
})

app.get("/contact/:name/:age/:origin", (req, res) => {

    console.log(req.params)
    const name = req.params.name;
    const age = parseInt(req.params.age);
    const origin = req.params.origin;

    res.json({
        name,
        age,
        origin
    
    })
    
    res.send(`This page is the contact page for ${name}, he is ${age} years old he is from ${origin} state`);
})

app.listen(3001,()=>{
    console.log("connected to serverrrr");
})