

import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config()


export const auth =(req,res,next)=>{
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(400).json({message:'token not found...'});

try {
        jwt.verify(token,process.env.jwt,(err,decoded)=>{
            if(err){
              return  res.status(400).json({message:err.message})
            }
            if(decoded){
                req.user = decoded
                next()
            }
        });

 
} catch (error) {
    
}
}