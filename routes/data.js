import { Router } from "express";
import DBConnection from '../middlewares/db_middleware.js';

const data = Router();

//connect to if not connected
data.use(DBConnection);

data.get('/',function(req,res){
    console.log(req.app.get('db')?"I am connected":"I am not conntected");
    res.send("Welcome to DataPage")
});

export default data;