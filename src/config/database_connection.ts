// connect with mongodb
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URL:string | undefined = process.env.MONGO_URL; 

if(!MONGO_URL) {
    console.log("Please provide a mongo url");
    process.exit(1);
}

function connectToDatabase():void {
    mongoose.connect(MONGO_URL as string).then(() => {
        console.log("Connected to database");
    }).catch((error) => {
        console.log("Error connecting to database");
        console.log(error);
    });
}


export default connectToDatabase;