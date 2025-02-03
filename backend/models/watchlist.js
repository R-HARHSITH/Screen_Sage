import { User } from "./user.model.js";
import mongoose from "mongoose";
const watchlistSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    movieId: String,
    title: String,
    posterPath: String,
  });
  
 export const Watchlist = mongoose.model("Watchlist", watchlistSchema);