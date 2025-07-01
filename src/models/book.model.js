import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    author:{
        type:mongoose.Types.ObjectId,ref:'user'
    },
    tags:{
        type:[mongoose.Types.ObjectId],ref:'tag',
        required:true,
    },
    price: {
        type:Number,
        min:1,
        required:true,
    },
    description: String
})
export const BookModel = mongoose.model('book',BookSchema)