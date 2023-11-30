import { Router } from "express";
import DBConnection from '../middlewares/db_middleware.js';

const users = Router();

//databse connection
users.use(DBConnection);

users.post('/signin',async function(req,res,next){
    try {

      const dbData = await req.app.get("db").find({}).limit(2);
      const data = await dbData.toArray();

      res.json(data);

    } catch (e) {
      next(e); // passes to error handler
    }
}).post('/signup',async function(req,res){
    try {

        const dbData = await req.app.get("db").find({}).limit(2);
        const data = await dbData.toArray();

        res.json(data);
  
      } catch (e) {
        next(e); // passes to error handler
      }
});

export default users;