import express from "express";
import {
    getTrendingMovie,
    getMovieTrailers,
    getMoviedetails,
    getSimilarMovies,
    getMoviesByCategory,
} from "../controllers/movie.controller.js";

const router = express.Router();

// getTrendingMovie will give only one movie randomly selected
router.get("/trending", getTrendingMovie);
router.get("/:id/trailers", getMovieTrailers);
router.get("/:id/details", getMoviedetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:category", getMoviesByCategory);

export default router;