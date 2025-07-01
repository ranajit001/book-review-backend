import { reviewModel } from "../models/review.model.js";

export const addReview = async (req,res) => {
    try {
        const bookID = req.params.id;
        const{text,rating} = req.body;
        if(!text.trim()) return res.status(400).json({mesage:'please write yout thoughts '})
            const userID = req.user.id;
        const review = await reviewModel.create({text:text.trim(),rating,bookID,userID})
        res.json({
            message:'review added successfully...',
            review
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};


export const getReview = async (req,res) => {
    try {
        const bookID = req.params.id;
        const bookreview = await reviewModel.aggregate([
            {
            $match:{bookID}
            },
        {
            $group:{
                _id:null,
                avarage_rating:{$avg:'$rating'},
            }
        }]);
        const last3Review = await reviewModel.find({bookID}).sort({createdAt:1});
        res.json({
            avg_review:bookreview,
            last3Review,
        })
    } catch (error) {
        res.status(500).json({mesage:error.message})
    }
};