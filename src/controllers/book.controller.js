import { BookModel } from "../models/book.model.js";

export const addbook = async (req,res) => {
    try {
        const{title,tags,price,description} = req.body;
        if(!title.trim() || tags.length==0  ) return res.status(400).json({mesage:'all fields required...'})
        const author = req.user.id;
    const book =await  BookModel.create({title,tags,price,description,author});
    res.json({
        mesage:'book created successfully...',
        book
    })
    } catch (error) {
        res.status(500).json({message:error.mesage})
    }
};


export const getBook = async (req,res) => {
    try {
        const id = req.params.id;
        if(id){
            const book = await BookModel.findById(id);
        if(!book) return res.status(400).json({mesage:'book not found...'});
        res.json({book})
        }
        else{
            const{title,tags,price,sort='title',order = 'asc'} = req.body;
            let searchobj = {};
            if(title) searchobj.title ={$regex:title,$options:'i'};
            // if(tags) searchobj.tags = { $elemMatch: { $regex: tags, $options: 'i' } };
            if(price) searchobj.price = {$gte:price}

            let sortobj = {};
            sortobj.sort ={sort:order=='asc'? 1:-1};
            const searchedbooks = await BookModel.aggregate([{$match:searchobj},sortobj])
            res.json({searchedbooks})
        }

    } catch (error) {
        res.status(500).json({message:error.message})
    }
};


export const updateBook = async(req,res)=>{
    try {
        const id = req.params.id;
            const book = await BookModel.findById(id)
            if (book.author != req.user.id) return res.status(400).json({mesage:'unauthorized...'})
            const updatebook = await BookModel.findByIdAndUpdate(id,req.body,{new:true,runValidators:true});
            return res.json({updatebook})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

export const deleteBook = async (req,res) => {
    try {
        const id = req.params.id;
        const book = await BookModel.findById(id);
        if(book.author != req.user.id) return res.status(400).json({message:'unauthorized...'})
    } catch (error) {
        res.status(500).json({mesage:error.message});
    }
}