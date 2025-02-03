// // WatchlistPage.js
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Trash2 } from "lucide-react"; // Import the remove icon
// import toast from 'react-hot-toast'
// import Navbar from "../components/Navbar";

// const WatchlistPage = () => {
//     const [watchlist, setWatchlist] = useState([]);

//     // Fetch the watchlist on component mount
//     useEffect(() => {
//         const fetchWatchlist = async () => {
//             try {
//                 const res = await axios.get(`/api/v1/watchlist/watchHistory`);
//                 console.log(res);
//                 setWatchlist(res.data.watchlist);
//             } catch (error) {
//                 console.error("Error fetching watchlist", error);
//             }
//         };

//         fetchWatchlist();
//     }, []);
//     const handleDelete = async (entry) => {
// 		try {
// 			await axios.delete(`/api/v1/watchlist/remove/${entry}`);
// 			setWatchlist(watchlist.filter((item) => item.movieId !== entry));
// 		} catch (error) {
// 			toast.error("Failed to delete search item");
// 		}
// 	};

//     return (

//         <div className='bg-black text-white px-5 md:px-20 min-h-screen'>
//             <Navbar />
//             <h2 className='mb-4 text-2xl font-bold'>Your Watchlist</h2>
//             <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
//                 {watchlist.map((movie) => (
//                     <div key={movie.movieId} className='relative group'>
//                         <img
//                             src={`https://image.tmdb.org/t/p/w200/${movie.posterPath}`}
//                             alt='Movie backdrop'
//                             className='w-full rounded-lg'
//                         />
//                         <button
//                             className='absolute top-2 right-2 p-1 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75'
//                             onClick={() => handleDelete(movie.movieId)}
//                         >
//                             <Trash2 size={20} className='text-white' />
//                         </button>
//                         <p className='mt-2 text-center'>{movie.title}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default WatchlistPage;

// new code 2
// WatchlistPage.js
import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react"; // Import the remove icon
import toast from 'react-hot-toast';
import Navbar from "../components/Navbar";

const WatchlistPage = () => {
    const [watchlist, setWatchlist] = useState([]);

    // Fetch the watchlist on component mount
    useEffect(() => {
        const fetchWatchlist = async () => {
            try {
                const res = await axios.get(`/api/v1/watchlist/watchHistory`);
                setWatchlist(res.data.watchlist);
            } catch (error) {
                console.error("Error fetching watchlist", error);
            }
        };
        fetchWatchlist();
    }, []);

    const handleDelete = async (entry) => {
        try {
            await axios.delete(`/api/v1/watchlist/remove/${entry}`);
            setWatchlist(watchlist.filter((item) => item.movieId !== entry));
        } catch (error) {
            toast.error("Failed to delete search item");
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen px-5 md:px-20 py-6">
            <Navbar />
            <br></br>
            <h2 className="text-3xl font-semibold mb-6 text-center md:text-left">Your Watchlist</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {watchlist.map((movie) => (
                    <div key={movie.movieId} className="relative group rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:bg-gray-700 transition duration-200">
                        <img
                            src={`https://image.tmdb.org/t/p/w200/${movie.posterPath}`}
                            alt={`${movie.title} backdrop`}
                            className="w-full h-64 object-cover"
                        />
                        <button
                            className="absolute top-2 right-2 p-2 bg-gray-800 bg-opacity-70 rounded-full hover:bg-opacity-90 transition duration-150"
                            onClick={() => handleDelete(movie.movieId)}
                        >
                            <Trash2 size={20} className="text-white" />
                        </button>
                        <p className="mt-2 text-center text-sm font-medium px-3 py-2 bg-gray-800 bg-opacity-70 group-hover:bg-opacity-100 transition duration-200">
                            {movie.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WatchlistPage;
