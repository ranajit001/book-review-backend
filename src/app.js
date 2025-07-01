import express from "express";
import { userRouter } from "./routes/user.router.js";
import { ReviewRouter } from "./routes/review.route.js";
import { bookRouter } from "./routes/book.route.js";
import { ConnectDB } from "./configs/db.js";

const app = express();

app.use(express.json());

app.use('/user',userRouter)
app.use('/book',bookRouter)
app.use('/review',ReviewRouter)


app.listen(3000,async()=>{
    await ConnectDB()
    console.log('server started...');
    
})