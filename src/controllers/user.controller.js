import { UserModel  } from "../models/user.model.js";

import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

const generateToken=(user) => jwt.sign({id:user._id,email:user.email},process.env.jwt,{expiresIn:'10m'})




export const regsiter = async (req,res) => {
    try {
        const{name,email,password} = req.body
        const existuser = UserModel .findOne({email});
        if(existuser) return res.status(409).json({message:'user aready exists..'})
        if(!name.trim() || email.trim() ||! password) return res.status(400).json({message:'please give all data...'})
        const hash = await argon2.hash(password);
        const user = UserModel .create({name,email,password:hash});
        res.json({user})

    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
};



export const login = async (req,res) => {
    try {
        const{email,password} = req.body;
                const existuser = UserModel .findOne({email});
        if(!existuser) return res.status(409).json({message:'user not found...'});

       const verify =  await argon2.verify(existuser.password,password)
       if(!verify) return res.status(400).json('invalid pass..')

        res.status.json({
            name:existuser.name,
            email:existuser.email,
            token: generateToken(existuser)
        })
            
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};
