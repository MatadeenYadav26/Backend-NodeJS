// 1. server ko create karna!
//2. server ko config karna!

const express  = require("express")

const app = express()
app.use(express.json())

const notes = []

// POST /notes => create a new note
app.post("/notes",(req,res)=>{
    notes.push(req.body)
    console.log(req.body)  // req.body is undefined because we have not configured the express to parse the incoming request body. We need to use express.json() middleware to parse the incoming JSON data. ab undifined nahi haii coz we have used middle ware so that , json form me read kar ske!
    // res.send("Note is added") : old method only for teaching , below is practical useful method!
    res.status(201).json({
        message:"Note created successfully",
        
    })
})

// GET /notes => get all notes
app.get("/notes",(req,res)=>{
    
    res.status(200).json({
        message:"All notes fetched successfully",
        notes:notes
    })
})

// delete method : /notes/:index
app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.status(204).json({  // status code 204 me no content hota hai , so we can not send any data in response body, so we can not send message in response body, but we can send message in response body, but it is not a good practice to send message in response body for 204 status code. So we can use 200 status code instead of 204 status code.
    message:"Note deleted successfully",
    })
})


//PATCH : /notes/:index => udate a note
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description

    res.status(200).json({
        message:"Note updated successfully",
    })
})

module.exports = app