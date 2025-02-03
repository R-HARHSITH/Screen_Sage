import { Watchlist } from "../models/watchlist.js";
import {User} from '../models/user.model.js';
import { fetchFromTMDB, fetchFromTMDBI } from "../services/tmdb.service.js";
import axios from 'axios';
import { ENV_VARS } from "../config/envVars.js";

// export const addToWatchlist=async(req,res)=>{
//     const { userId, movieId } = req.body;

//   // Fetch movie details from TMDB API
//   // const movieUrl = `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}`;
//   try {
//     // const response = await axios.get(movieUrl);
//     const { id } = req.params;
//     const response = await fetchFromTMDB(
// 			`https://api.themoviedb.org/3/movie?query=${id}&include_adult=false&language=en-US&page=1`
// 		);
//     const movie = response.data;

//     // Save to watchlist
//     const watchlistItem = new Watchlist({
//       userId,
//       movieId,
//       title: movie.title,
//       posterPath: movie.poster_path,
//     });

//     await watchlistItem.save();
//     res.status(200).json({ message: "Added to watchlist", movie: watchlistItem });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding to watchlist", error });
//   }
// }
// new code 2 for add to watchlist 

// TMDB API configuration
const TMDB_API_KEY =ENV_VARS.TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3/movie';

// Function to add a movie to the user's watchlist
// export const addToWatchlist = async (req, res) => {
//     try {
//       const userId=req.user._id;

//         const { movieId } = req.params; // Extract userId and movieId from the request body
//         // console.log("entered for adding po watch list ");
// console.log(movieId);
//         // Check if user exists (optional validation step)
//         const user = await User.findById(req.user._id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Fetch movie data from TMDB API
//       fetchFromTMDB(`https://api.themoviedb.org/3/movie/${movieId}`)
// //         const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${'9d88e942649d06a8e29f9c68d6153ba1'}`;
// // const options = {
// //   method: 'POST',
// //   headers: {accept: 'application/json', 'content-type': 'application/json'},
// //   // body: JSON.stringify({media_type: 'movie', media_id:movieId, watchlist: true})

// // };

// // fetch(url, options)
//   .then(response => console.log("hi"))
//   .catch(err => console.error(err));
//   if (!res.ok) {
//     return res.status(404).json({ message: 'Movie not found in TMDB' });
// }

//   const movieresponse=await response.json();
//   console.log(response);
//         // If the movie is not found in TMDB, return a 404 error
//         // if (!res.data) { //movieResponse
//         //   console.log("Movie not found");
//         //     return res.status(404).json({ message: 'Movie not found in TMDB' });
//         // }

//         // Check if the movie is already in the user's watchlist
//         const title =response.title;
// const posterPath = response.poster_path;
// console.log(title);
// console.log(posterPath);
//         const existingEntry = await Watchlist.findOne({ userId, movieId });
//         if (existingEntry) {
//           console.log("movie already exists");
//             return res.status(400).json({ message: 'Already in watchlist' });
//         }
        
//         // Add the movie to the user's watchlist
//         const newWatchlistEntry = new Watchlist({
//             userId,
//             movieId,
//             // NEED TO ADD TITLE AND POSTER PATH
//             title, // Save the movie title from TMDB data
//             posterPath, // Save additional TMDB movie details as needed
//         });
        
//         await newWatchlistEntry.save();
//         console.log(newWatchlistEntry);
//         console.log("movie is added to watchlist");

//        return res.status(201).json({ message: 'Added to watchlist', data: newWatchlistEntry });
//     } catch (error) {
//         console.error('Error adding movie to watchlist:', error);
//       return res.status(500).json({ message: 'Server error' });
//     }
// };
// new code 2
export const addToWatchlist = async (req, res) => {
  try {
      const userId = req.user._id;
      const { movieId } = req.params; // Extract userId and movieId from the request body
      console.log(movieId);

      // Check if user exists (optional validation step)
      const user = await User.findById(req.user._id);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Fetch movie data from TMDB API
      const response = await fetchFromTMDBI(`https://api.themoviedb.org/3/movie/${movieId}`);
      console.log(response);
      if (!response.ok) {
          return res.status(404).json({ message: 'Movie not found in TMDB' });
      }

      const movieResponse = await response.json();

      // Check if the movie is already in the user's watchlist
      const title = movieResponse.title;
      const posterPath = movieResponse.poster_path;
      console.log(title);
      console.log(posterPath);

      const existingEntry = await Watchlist.findOne({ userId, movieId });
      if (existingEntry) {
          console.log("movie already exists");
          return res.status(400).json({ message: 'Already in watchlist' });
      }

      // Add the movie to the user's watchlist
      const newWatchlistEntry = new Watchlist({
          userId,
          movieId,
          title, // Save the movie title from TMDB data
          posterPath, // Save additional TMDB movie details as needed
      });

      await newWatchlistEntry.save();
      console.log(newWatchlistEntry);
      console.log("movie is added to watchlist");

      return res.status(201).json({ message: 'Added to watchlist', data: newWatchlistEntry });
  } catch (error) {
      console.error('Error adding movie to watchlist:', error);
      return res.status(500).json({ message: 'Server error' });
  }
};



// export const removeFromWatchlist=async(req,res)=>{
//     const { movieId } = req.params;
//     const userId=req.user._id;

//     try {
//       await Watchlist.deleteOne({ userId, movieId });
//       res.status(200).json({ message: "Removed from watchlist" });
//     } catch (error) {
//       res.status(500).json({ message: "Error removing from watchlist", error });
//     }
// }


// this is removal of watchlist
// export async function removeFromWatchlist(req, res) {
// 	let { id } = req.params;

// 	id = parseInt(id);

// 	try {
// 		await Watchlist.findByIdAndDelete(id);

// 		res.status(200).json({ success: true, message: "Item removed from watchlist" });
// 	} catch (error) {
// 		console.log("Error in removeFromWatchlist controller: ", error.message);
// 		res.status(500).json({ success: false, message: "Internal Server Error" });
// 	}
// }
// new code 2
export async function removeFromWatchlist(req, res) {
  const { id } = req.params;

  try {
      // Attempt to find and delete by the MongoDB object ID
      const deletedItem = await Watchlist.findOneAndDelete(id);

      if (!deletedItem) {
          // If no item was found, return a 404 response
          return res.status(404).json({ success: false, message: "Item not found in watchlist" });
      }

      // Return success response if deletion was successful
      res.status(200).json({ success: true, message: "Item removed from watchlist" });
  } catch (error) {
      console.error("Error in removeFromWatchlist controller:", error.message);
      res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
// export async function removeFromWatchlist(req, res) {
//   let { id } = req.params;

//   try {
//       const deletedItem = await Watchlist.findByIdAndDelete(id); // Assuming WatchlistItem is your model for the watchlist items
      
//       if (!deletedItem) {
//           return res.status(404).json({ success: false, message: "Item not found" });
//       }

//       res.status(200).json({ success: true, message: "Item deleted from watchlist" });
//   } catch (error) {
//       console.log("Error in removeWatchlistItem controller: ", error.message);
//       res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// }


export const getFromWatchlist=async(req,res)=>{
    const userId=req.user._id;
  try {
    const watchlist = await Watchlist.find({ userId });
    res.status(200).json({ watchlist });
  } catch (error) {
    res.status(500).json({ message: "Error fetching watchlist", error });
  }
}
// export async function getFromWatchlist(req, res) {
// 	try {
// 		res.status(200).json({ success: true, content: req.user.searchHistory });
// 	} catch (error) {
// 		res.status(500).json({ success: false, message: "Internal Server Error" });
// 	}
// }

// export async function removeFromWatchlist(req, res) {
// 	let { id } = req.params;

// 	id = parseInt(id);

// 	try {
// 		await User.findByIdAndUpdate(req.user._id, {
// 			$pull: {
// 				Watchlist: { id: id },
// 			},
// 		});

// 		res.status(200).json({ success: true, message: "Item removed from search history" });
// 	} catch (error) {
// 		console.log("Error in removeItemFromSearchHistory controller: ", error.message);
// 		res.status(500).json({ success: false, message: "Internal Server Error" });
// 	}
// }