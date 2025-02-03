import { fetchFromTMDB } from "../services/tmdb.service.js";
import dotenv from 'dotenv';

dotenv.config();


export async function getTrendingTv(req, res) {
    try {
        // Fetch data from TMDB API
        const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/tv/day?language=en-US");

        // Select a random movie from the fetched data
        // ? this question mark is for optional chaining if it null then chaining will not continue.
        const randomTv = data.results[Math.floor(Math.random() * data.results?.length)];

        // Send the selected movie as a response, it should be content (movie or tvshows)
        res.json({ success: true, content: randomTv });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


export async function getTvTrailers(req, res) {
   // Get the movie trailer by ID.
   const { id } = req.params;

   try {

       const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`)
       res.json({ success: true, trailers: data.results })

   } catch (error) {
       if (error.message.includes("404")) {
           return res.status(404).send(null)
       }

       res.status(500).json({ success: false, message: "Internal server error" });
   }

};

export async function getTvdetails(req, res) {
    const { id } = req.params;

    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`)
        res.status(200).json({ success: true, content: data })
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(404).send(null)
        }

        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


export async function getSimilarTvs(req, res) {
    const { id } = req.params

    try {

        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`);
        res.status(200).json({ success: true, similar: data.results });
    } catch (error) {
        // We will never hit 404 not found error bcoz there will be always a similar movie.
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


export async function getTvsByCategory(req, res) {
    // We have 4 categories we can pass it and get 4 different lists.
    /*
        category values are
        * on_the_air
        * top_rated
        * airing_today
        * popular
    */

    const {category} = req.params;

    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`);
        res.status(200).json({success: true, content: data.results})
    } catch (error) {
        
        res.status(500).json({success: false, message: "Internal Server Error."})
    }
};
