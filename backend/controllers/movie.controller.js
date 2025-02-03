import { fetchFromTMDB } from "../services/tmdb.service.js"

// Fetch trending movies from TMDB API
export async function getTrendingMovie(req, res) {
    try {
        // Fetch data from TMDB API
        const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US");

        // Select a random movie from the fetched data
        // ? this question mark is for optional chaining if it null then chaining will not continue.
        const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];
        console.log(randomMovie);
        // Send the selected movie as a response, it should be content (movie or tvshows)
        res.json({ success: true, content: randomMovie });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
// export async function getTrendingMovie(req, res) {
//     try {
//         // Fetch data from TMDB API
//         const response = await fetchFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US");

//         // Check if the response is okay
//         if (!response.ok) {
//             return res.status(response.status).json({ success: false, message: "Failed to fetch trending movies" });
//         }

//         // Get the data directly from the simulated response
//         const data = await response.json(); // Now calling the json() method from the new structure

//         // Check if data and results array are valid
//         if (!data || !data.results || data.results.length === 0) {
//             return res.status(404).json({ success: false, message: "No trending movies found" });
//         }
//         // console.log(data);
//         // Select a random movie from the fetched data
//         const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

//         // Send the selected movie as a response
//         console.log({ success: true, content: randomMovie });
//          res.json({ success: true, content: randomMovie });
//     } catch (error) {
//         console.error("Error in getTrendingMovie:", error.message || error);  // Improved logging
//        return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };


// Get movie trailers by ID
export async function getMovieTrailers(req, res) {

    // Get the movie trailer by ID.
    const { id } = req.params;

    try {

        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`)
        res.json({ success: true, trailers: data.results })

    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(404).send(null)
        }

        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// Get movie details by ID
export async function getMoviedetails(req, res) {
    const { id } = req.params;

    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
        res.status(200).json({ success: true, content: data })
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(404).send(null)
        }

        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// Get similar movies by ID
export async function getSimilarMovies(req, res) {
    const { id } = req.params

    try {

        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`);
        res.status(200).json({ success: true, similar: data.results });
    } catch (error) {
        // We will never hit 404 not found error bcoz there will be always a similar movie.
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export async function getMoviesByCategory(req, res) {
    // We have 4 categories we can pass it and get 4 different lists.
    /*
        category values are
        * popular
        * top_rated
        * upcoming
        * now_playing
    */
    const {category} = req.params;

    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`);
        res.status(200).json({success: true, content: data.results})
    } catch (error) {
        
        res.status(500).json({success: false, message: "Internal Server Error."})
    }
};