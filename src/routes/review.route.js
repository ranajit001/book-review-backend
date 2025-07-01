import { Router } from "express";
export const ReviewRouter = Router();
import { auth } from "../middlewares/auth.middleware.js";

import { addReview,getReview } from "../controllers/review.controller.js";

ReviewRouter
.post('/add-review/:id',auth,addReview)
.get('/get-review/:id',auth,getReview)