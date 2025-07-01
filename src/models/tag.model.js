import mongoose, { mongo } from "mongoose";

const TagSchema = new mongoose.Schema({
    title:{
        type:String,trim:true , retuired:true,unque:true,
    },
    bookID:{
          type:[mongoose.Types.ObjectId],ref:'book',required:true
    }
});


export const TagModel = mongoose.model('tag',TagSchema)