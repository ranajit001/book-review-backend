import mongoose from "mongoose";
import { config } from "dotenv";
config()
export const ConnectDB = async()=>{
    try {
       await mongoose.connect(process.env.mongo) 
       console.log('db connected...');
       
    } catch (error) {
        console.log(error.message);
        
    }
}