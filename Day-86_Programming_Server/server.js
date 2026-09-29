const express = require("express") // creates a server

const app = express() // server instance create karna

app.get('/',(req,res)=>{
    res.send("Hello World")
}) // agar server pr koi kuch request krega toh response "Hello World jana chahiye"


app.get("/about",function(req,res){
    res.send("about ka response!")
})

app.get('/home',(req,res)=>{
    res.send("Ye hai home page!")
})

app.get('/ghar',(req,res)=>{
    res.send("Ye hai ghar ka response")
})

app.listen(3000) // server ko start krta hai!