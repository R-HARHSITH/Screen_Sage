// This is a service file for using api and fetching data

import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

/**
 * Fetches data from TMDB API.
 * Wrapping into a function because it needs to be used multiple times.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise} - A promise that resolves with the fetched data.
 */
export const fetchFromTMDB = async (url) => {
    try {
        const options = {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${ENV_VARS.TMDB_API_KEY}`,
            }
        };

        const response = await axios.get(url, options);

        return response.data;
    } catch (error) {
        console.error("Failed to fetch data from TMDB:", error.message);
        throw new Error(`Failed to fetch data from TMDB: ${error.response?.statusText || error.message}`);
    }
};
// new code 2

export const fetchFromTMDBI = async (url) => {
    try {
        const options = {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${ENV_VARS.TMDB_API_KEY}`,
            }
        };

        const response = await axios.get(url, options);

        // Simulate a fetch-like response
        return {
            ok: response.status === 200,
            status: response.status,
            json: async () => response.data // Emulate .json() method
        };
    } catch (error) {
        console.error("Failed to fetch data from TMDB:", error.message);
        throw new Error(`Failed to fetch data from TMDB: ${error.response?.statusText || error.message}`);
    }
};


// import dotenv from 'dotenv';
// dotenv.config();

// export async function fetchFromTMDB(endpoint) {
//     const apiKey = ENV_VARS.TMDB_API_KEY;
//     const url = `${endpoint}&api_key=${apiKey}`;
    
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Error ${response.status}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error("Error fetching data from TMDB:", error);
//         throw error;
//     }
// }


// age based restriction 
export const fetchMoviesByCertification = async (certification) => {
    const url = `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=${certification}&sort_by=popularity.desc`;

    try {
        const options = {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${ENV_VARS.TMDB_API_KEY}`,
            }
        };

        const response = await axios.get(url, options);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch movies from TMDB:", error.message);
        throw new Error(`Failed to fetch movies: ${error.response?.statusText || error.message}`);
    }
};