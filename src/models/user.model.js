import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    books:{type:[mongoose.Types.ObjectId],ref:'book',default:[]}
});

export const UserModel = mongoose.model('user',UserModel);