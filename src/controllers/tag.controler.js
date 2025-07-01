import { TagModel } from "../models/tag.model.js";

export getTagOfbook = async (tag,bookID) => {
    try {
       const tagArray = await TagModel.findOne({bookID});
    } catch (error) {
        
    }
}