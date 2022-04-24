const express=require("express")
const app=express()
const router = express.Router();
const mongoose = require("mongoose");

const cors = require("cors");
const helmet = require("helmet");

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(helmet())
app.use(cors())
app.use("/", require("./Route/user"))
app.use("/instance", require("./Route/ec2"))

app.listen(3001, (e)=>{
    console.log("Connected")

    mongoose.connect("mongodb://localhost/S3Assignment").then((result)=>{
        console.log("Database Connected")
    }).catch((e)=>{
        console.log("Database connection failed")
        console.log(e)
    })

})


