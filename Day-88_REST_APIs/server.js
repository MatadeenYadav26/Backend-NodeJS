// server ko start krne ke liye ye file use hoti hai.

const app = require("./src/app") // ye app ko import krta hai jo src/app.js me export kiya gaya hai.


app.listen(3000,()=>{
    console.log("Server is running on port 3000!")
})