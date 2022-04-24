const { response } = require("express")
const express = require("express")
const router = express.Router()

const UserService = require("../ec2Service")
const services = new UserService()

router.get("/", async (req,res)=>{
    const data=await services.instanceDetails()
    res.send(data)
})
router.post("/create", async (req,res)=>{
    const data = await services.instanceCreate(req.body)
    res.send(data)
})


router.post("/stop", async (req,res)=>{
     const st = await services.instanceStop(req.body)
     res.send(st)
})

router.post("/terminate", async (req,res)=>{
    const st=await services.instanceTerminate(req.body)
    res.send(st)
})
module.exports = router;


