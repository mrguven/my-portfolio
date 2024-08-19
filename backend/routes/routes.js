const express = require("express");
const routes = express.Router();
const userInfo=require('../modal/userInfo')


routes.get('/',(req,res)=>{
    
})
routes.post('/createuser', userInfo.createUser)


module.exports=routes