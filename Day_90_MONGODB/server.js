// Cluster = Storage of DB + Processor of DB 
// Database
// cloud = MongoDB Atlas
// a cluster may contain multiple databases!
// server start karna
// database connect karna



const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDb(){
    mongoose.connect("mongodb+srv://aman:qn8N3RclLWftzdBq@cluster0.drfmikg.mongodb.net/day-90")
    .then(()=>{
        console.log("Connected to Database successfully!");
    })
}

connectToDb();

app.listen(3000, () => {
    console.log("Server is running on port 3000!");
}) 

