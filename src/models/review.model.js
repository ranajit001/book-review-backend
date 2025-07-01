import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
rating:{
        type:Number,
        min: [1, 'minimum is 1'], 
        max: [5, 'max is 5']
    },
text:{
    type:String,
    trim:true
},
userID:{
    type:mongoose.Types.ObjectId,ref:'user'
},
bookID:{
      type:mongoose.Types.ObjectId,ref:'book'
}
},{timestamps:true});


export const reviewModel = mongoose.model('review',reviewSchema)