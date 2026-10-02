// ye file ka kaam hai server ko start karna aur server ko config krna.

const express = require("express")
notes = [] // ye array me notes ko store krne ke liye use hota hai.

const app = express() // server create ho jata hai!

app.use(express.json()) // ye middleware hai jo request body ko pass krta hai taki hum json data ko access kr sko. 

app.get('/',(req,res)=>{
    res.send("Hello World")
})
// Post method : '/notes' api
app.post('/notes',(req,res)=>{
    console.log(req.body)
    notes.push(req.body) // ye notes array me req.body ko push krta hai.
    console.log("notes")
    res.send("Notes created successfully!")
})

// Get method : '/notes' api
app.get('/notes',(req,res)=>{
    res.send(notes) // ye notes array ko response me bhejta hai.
})

//Delete method : '/notes/:id' api / params
// params used for single data
// body used for multiple data or big data like array or object

app.delete('/notes/:index',(req,res)=>{
    // console.log(req.params.index) // ye req.params ko console me print krta hai.
    delete notes[req.params.index] // ye notes array me se req.params.index ko delete krta hai.
    // notes.splice(req.params.index,1) // ye notes array me se req.params.index ko delete krta hai.   

    res.send("Notes deleted successfully!") // ye response me message bhejta hai.
})

// PATCH method : '/notes/:index'
// req.body = {description:="sample modified description"} // ye req.body me description ko modify krta hai.

app.patch('/notes/:index',(req,res)=>{

    notes[req.params.index].description = req.body.description // ye notes array me se req.params.index ko modify krta hai.

    res.send("Notes modified successfully!") // ye response me message bhejta hai.
    
})


module.exports = app // ye app ko export krta hai taki server.js me use kiya ja sake.   

