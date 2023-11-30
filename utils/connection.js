import { MongoClient } from "mongodb";


// Database connection
export default async function(){

        let client = new MongoClient(process.env.DB_URL);
        
        client.on('connectionCreated',function(){
            console.log("DB Connection Created");
        }).on('close',function(){
            console.log("DB Connection Closed");
        });
        
        await client.connect();


        return client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION);
};