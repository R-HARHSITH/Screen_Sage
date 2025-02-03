import express from "express";
import {
    getTrendingTv,
    getTvTrailers,
    getTvdetails,
    getSimilarTvs,
    getTvsByCategory,
} from "../controllers/tv.controller.js";

const router = express.Router();
// Putting just same thing as movie routes but this time for tv

router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvdetails);
router.get("/:id/similar", getSimilarTvs);
router.get("/:category", getTvsByCategory);


export default router;