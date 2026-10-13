const express = require("express")
const userModel = require("../models/user.model")
const jwt = require('jsonwebtoken')
const crypto = require("crypto")


const authRouter = express.Router()

authRouter.post("/register",async(req,res)=>{
    const{email, name , password} = req.body

    const isUserAlreadyExists = await userModel.findOne({ email })


    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"User with same email already exists!"
        })
    }

    const hash = crypto.createHash("md5").update(password).digest("hex")


    const user = await userModel.create({
        email, password : hash , name 
    })

    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET
    )

    res.cookie("jwt_token", token)

    res.status(201).json({
        message:"User Registered",
        user,
        token
    })

})    

authRouter.post("/protected",(req,res)=>{
    console.log(req.cookies);

    res.status(200).json({
        message: "This is a protected route!"
    })

}) // to access this api you need to write "/api/auth/protected"

// this type of callback functions are also known as controller as , it only runs when api is called
authRouter.post("/login",async(req,res)=>{
    
    const {email,password} = req.body
    
    const user = await userModel.findOne({email})
    
    if(!user){
        return res.status(404).json({
            message:"User not found with this email adress!"
        })
    }

    const isPasswordMatched = user.password === crypto.createHash("md5").update(password).digest("hex")

    if(!isPasswordMatched){
        return res.status(401).json({
            message:"Invali Password"
        })
    }

    const token = jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET)

    res.cookie("jwt_token",token)

    res.status(200).json({
        message:"User Logged In",
        user,
    })
})


module.exports = authRouter

