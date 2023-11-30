import { Router } from "express";

const index = Router();

index.get('/',function(req,res){
    
    console.log(req.app.get('db')?"I am connected":"I am not conntected");
    res.send("Welcome to Homepage")
    
});

export default index;