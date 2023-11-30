import Express ,{json,urlencoded } from "express";
import cors from 'cors';
import { config } from "dotenv";
import index from "./routes/index.js";
import users from "./routes/user.js";
import data from "./routes/data.js";

config(); 

const app =Express();

/** Basic middlewares */
app.use(json());
app.use(urlencoded({extended:false}));
app.use(cors())

app.disable('x-powered-by');

/** Routes */
app.use('/',index);
app.use('/users',users);
app.use('/data',data);

/** 404 Handler */
app.use(function(req,res,next){
    res.status(404);
    res.send("Not Found")
});

/** Error Handler */
app.use(function(error,req,res,next){
    console.log(error.message,"i am error");
    res.status(500);
    res.send("Internal Server Error");
});

app.listen(3000,function(){
    console.log("App is running at Port:3000");
});

process.on('SIGINT', () => {
    console.log('Received SIGINT sigal... gracefully shuting down!');
    const db = app.get('db');
    if(db){
        db.client?.close();
    }
    process.exit(0);
});