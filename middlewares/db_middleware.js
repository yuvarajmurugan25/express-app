import DBClient from '../utils/connection.js';

export default async function(req,res,next){

    try{
        if(!req.app.get('db')){ // check wheather db global reference is created or not
            const db = await DBClient();
            req.app.set('db',db);
        }else{
            console.log("Db already connected!");
        }
        next()
    }catch(e){
        console.log(e.message);
        res.status(500).send("DB Connection Error!");
    }

}