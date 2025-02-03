import express from 'express'
import {addToWatchlist, getFromWatchlist, removeFromWatchlist } from '../controllers/watchcontroller.js';

const router=express.Router();


router.post("/add/:movieId", addToWatchlist);
router.delete("/remove/:movieId", removeFromWatchlist);
router.get("/watchHistory",getFromWatchlist)

export default router
