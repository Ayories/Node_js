import express from 'express';

const app = express();

app.use(express.json())

// app.get("/about",(req, res) => {
//     res.send("hello world");
// })

// app.get("/contact/:name/:age/:origin", (req, res) => {

//     console.log(req.params)
//     const name = req.params.name;
//     const age = parseInt(req.params.age);
//     const origin = req.params.origin;

//     res.json({
//         name,
//         age,
//         origin
    
//     })
    
//     // res.send(`This page is the contact page for ${name}, he is ${age} years old he is from ${origin} state`);
// })




app.post('/login', (req,res)=>{
    
    res.send(req.body);

})



app.listen(3000,()=>{
    console.log("connected to serverrrr");
})