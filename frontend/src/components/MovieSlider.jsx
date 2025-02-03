// import { useEffect, useRef, useState } from "react";
// import { useContentStore } from "../store/content";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { SMALL_IMG_BASE_URL } from "../utils/constants";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const MovieSlider = ({ category }) => {
// 	const { contentType } = useContentStore();
// 	const [content, setContent] = useState([]);
// 	const [showArrows, setShowArrows] = useState(false);

// 	const sliderRef = useRef(null);

// 	const formattedCategoryName =
// 		category.replaceAll("_", " ")[0].toUpperCase() + category.replaceAll("_", " ").slice(1);
// 	const formattedContentType = contentType === "movie" ? "Movies" : "TV Shows";

// 	useEffect(() => {
// 		const getContent = async () => {
// 			const res = await axios.get(`/api/v1/${contentType}/${category}`);
// 			setContent(res.data.content);
// 		};

// 		getContent();
// 	}, [contentType, category]);

// 	const scrollLeft = () => {
// 		if (sliderRef.current) {
// 			sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
// 		}
// 	};
// 	const scrollRight = () => {
// 		sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
// 	};

// 	return (
// 		<div
// 			className='bg-black text-white relative px-5 md:px-20'
// 			onMouseEnter={() => setShowArrows(true)}
// 			onMouseLeave={() => setShowArrows(false)}
// 		>
// 			<h2 className='mb-4 text-2xl font-bold'>
// 				{formattedCategoryName} {formattedContentType}
// 			</h2>

// 			<div className='flex space-x-4 overflow-x-scroll scrollbar-hide' ref={sliderRef}>
// 				{content.map((item) => (
// 					<Link to={`/watch/${item.id}`} className='min-w-[250px] relative group' key={item.id}>
// 						<div className='rounded-lg overflow-hidden'>
// 							<img
// 								src={SMALL_IMG_BASE_URL + item.backdrop_path}
// 								alt='Movie image'
// 								className='transition-transform duration-300 ease-in-out group-hover:scale-125'
// 							/>
// 						</div>
// 						<p className='mt-2 text-center'>{item.title || item.name}</p>
// 					</Link>
// 				))}
// 			</div>

// 			{showArrows && (
// 				<>
// 					<button
// 						className='absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center
//             size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10
//             '
// 						onClick={scrollLeft}
// 					>
// 						<ChevronLeft size={24} />
// 					</button>

// 					<button
// 						className='absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center
//             size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10
//             '
// 						onClick={scrollRight}
// 					>
// 						<ChevronRight size={24} />
// 					</button>
// 				</>
// 			)}
// 		</div>
// 	);
// };
// export default MovieSlider;

// new code 2

// import { useEffect, useRef, useState } from "react";
// import { useContentStore } from "../store/content";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { SMALL_IMG_BASE_URL } from "../utils/constants";
// import { ChevronLeft, ChevronRight, BookmarkPlus } from "lucide-react"; // Added BookmarkPlus for Save icon

// const MovieSlider = ({ category, userId }) => { // Receive userId as a prop
// 	const { contentType } = useContentStore();
// 	const [content, setContent] = useState([]);
// 	const [showArrows, setShowArrows] = useState(false);
// 	const sliderRef = useRef(null);

// 	const formattedCategoryName =
// 		category.replaceAll("_", " ")[0].toUpperCase() + category.replaceAll("_", " ").slice(1);
// 	const formattedContentType = contentType === "movie" ? "Movies" : "TV Shows";

// 	useEffect(() => {
// 		const getContent = async () => {
// 			const res = await axios.get(`/api/v1/${contentType}/${category}`);
// 			setContent(res.data.content);
// 		};

// 		getContent();
// 	}, [contentType, category]);

// 	const scrollLeft = () => {
// 		if (sliderRef.current) {
// 			sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
// 		}
// 	};
// 	const scrollRight = () => {
// 		sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
// 	};

// 	const saveToWatchlist = async (movie) => {
// 		try {
// 			await axios.post("/api/v1/watchlist/add", {
// 				userId, // Pass user ID dynamically
// 				movieId: movie.id,
// 				title: movie.title || movie.name,
// 				posterPath: movie.backdrop_path,
// 			});
// 			alert(`${movie.title || movie.name} added to watchlist!`);
// 		} catch (error) {
// 			console.error("Error saving to watchlist", error);
// 		}
// 	};

// 	return (
// 		<div
// 			className='bg-black text-white relative px-5 md:px-20'
// 			onMouseEnter={() => setShowArrows(true)}
// 			onMouseLeave={() => setShowArrows(false)}
// 		>
// 			<h2 className='mb-4 text-2xl font-bold'>
// 				{formattedCategoryName} {formattedContentType}
// 			</h2>

// 			<div className='flex space-x-4 overflow-x-scroll scrollbar-hide' ref={sliderRef}>
// 				{content.map((item) => (
// 					<div key={item.id} className='min-w-[250px] relative group'>
// 						<div className='rounded-lg overflow-hidden'>
// 							<img
// 								src={SMALL_IMG_BASE_URL + item.backdrop_path}
// 								alt={item.title || item.name}
// 								className='transition-transform duration-300 ease-in-out group-hover:scale-125'
// 							/>
// 						</div>
// 						<p className='mt-2 text-center'>{item.title || item.name}</p>

// 						{/* Save Button */}
// 						<button
// 							className='mt-2 bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded flex items-center justify-center mx-auto'
// 							onClick={() => saveToWatchlist(item)}
// 						>
// 							<BookmarkPlus className='mr-2' />
// 							Save
// 						</button>
// 					</div>
// 				))}
// 			</div>

// 			{showArrows && (
// 				<>
// 					<button
// 						className='absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center
//             size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10'
// 						onClick={scrollLeft}
// 					>
// 						<ChevronLeft size={24} />
// 					</button>

// 					<button
// 						className='absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center
//             size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10'
// 						onClick={scrollRight}
// 					>
// 						<ChevronRight size={24} />
// 					</button>
// 				</>
// 			)}
// 		</div>
// 	);
// };

// export default MovieSlider;

// new code 3

// import { useEffect, useRef, useState } from "react";
// import { useContentStore } from "../store/content";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { SMALL_IMG_BASE_URL } from "../utils/constants";
// import { ChevronLeft, ChevronRight, BookmarkPlus } from "lucide-react"; // Icon for Save button

// const MovieSlider = ({ category, userId }) => {
// 	const { contentType } = useContentStore();
// 	const [content, setContent] = useState([]);
// 	const [showArrows, setShowArrows] = useState(false);
// 	const sliderRef = useRef(null);

// 	const formattedCategoryName =
// 		category.replaceAll("_", " ")[0].toUpperCase() + category.replaceAll("_", " ").slice(1);
// 	const formattedContentType = contentType === "movie" ? "Movies" : "TV Shows";

// 	useEffect(() => {
// 		const getContent = async () => {
// 			const res = await axios.get(`/api/v1/${contentType}/${category}`);
// 			setContent(res.data.content);
// 		};

// 		getContent();
// 	}, [contentType, category]);

// 	const scrollLeft = () => {
// 		if (sliderRef.current) {
// 			sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
// 		}
// 	};
// 	const scrollRight = () => {
// 		sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
// 	};

// 	const saveToWatchlist = async (movie) => {
// 		try {
// 			await axios.post("/watchlist/add", {
// 				userId, // Pass user ID dynamically
// 				movieId: movie.id,
// 				title: movie.title || movie.name,
// 				posterPath: movie.backdrop_path,
// 			});
// 			alert(`${movie.title || movie.name} added to watchlist!`);
// 		} catch (error) {
// 			console.error("Error saving to watchlist", error);
// 		}
// 	};

// 	return (
// 		<div
// 			className='bg-black text-white relative px-5 md:px-20'
// 			onMouseEnter={() => setShowArrows(true)}
// 			onMouseLeave={() => setShowArrows(false)}
// 		>
// 			<h2 className='mb-4 text-2xl font-bold'>
// 				{formattedCategoryName} {formattedContentType}
// 			</h2>

// 			<div className='flex space-x-4 overflow-x-scroll scrollbar-hide' ref={sliderRef}>
// 				{content.map((item) => (
// 					<div key={item.id} className='min-w-[250px] relative group'>
// 						<div className='relative overflow-hidden rounded-lg'>
// 							<img
// 								src={SMALL_IMG_BASE_URL + item.backdrop_path}
// 								alt={item.title || item.name}
// 								className='w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110'
// 							/>

// 							{/* Save Button on Hover */}
// 							<button
// 								className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
// 								onClick={() => saveToWatchlist(item)}
// 							>
// 								<BookmarkPlus className='text-white' size={32} />
// 							</button>
// 						</div>

// 						<p className='mt-2 text-center'>{item.title || item.name}</p>
// 					</div>
// 				))}
// 			</div>

// 			{showArrows && (
// 				<>
// 					<button
// 						className='absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center
//             size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10'
// 						onClick={scrollLeft}
// 					>
// 						<ChevronLeft size={24} />
// 					</button>

// 					<button
// 						className='absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center
//             size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10'
// 						onClick={scrollRight}
// 					>
// 						<ChevronRight size={24} />
// 					</button>
// 				</>
// 			)}
// 		</div>
// 	);
// };

// export default MovieSlider;


// new code 4

import { useEffect, useRef, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";
import { Link } from "react-router-dom";
import { SMALL_IMG_BASE_URL } from "../utils/constants";
import toast from 'react-hot-toast';
import { ChevronLeft, ChevronRight, Bookmark } from "lucide-react"; // Import the bookmark icon

const MovieSlider = ({ category}) => {
    const { contentType } = useContentStore();
    const [content, setContent] = useState([]);
    const [showArrows, setShowArrows] = useState(false);
    
    const sliderRef = useRef(null);

    const formattedCategoryName =
        category.replaceAll("_", " ")[0].toUpperCase() + category.replaceAll("_", " ").slice(1);
    const formattedContentType = contentType === "movie" ? "Movies" : "TV Shows";

    useEffect(() => {
        const getContent = async () => {
            const res = await axios.get(`/api/v1/${contentType}/${category}`);
            console.log("API Response:", res);

            setContent(res.data.content);
        };

        getContent();
    }, [contentType, category]);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
        }
    };
    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
    };
    const addToMyWatchlist = async (movieId,event) => {
        event.preventDefault()
        // try {
        //     console.log("Enterred to watchlist")
        //     // added to retrieve user id.
        //     console.log(movieId);
        //     await axios.post(`/api/v1/watchlist/add/${movieId}`);
        //     toast.success("Added to watchlist");
        //     alert("Added to watchlist!");
        // } catch (error) {
        //     console.error("Error adding to watchlist", error);
        //     toast.error("There is error in adding to watchlist")
        // }
        try {
            console.log("Attempting to add movie to watchlist:", movieId);
    
            const response = await axios.post(`/api/v1/watchlist/add/${movieId}`);
            
            // Check the response to determine what message to show
            if (response.data.message === "Added to watchlist") {
                toast.success("Movie successfully added to your watchlist!", {
                    position: "top-right",
                    autoClose: 3000,
                });
            } else if (response.data.message === "Already in watchlist") {
                toast.info("This movie is already in your watchlist!", {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        } catch (error) {
            console.error("Error adding to watchlist:", error);
            
            // Show error message
            toast.error("There was an error adding the movie to your watchlist.", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };

    return (
        <div
            className='bg-black text-white relative px-5 md:px-20'
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
        >
            <h2 className='mb-4 text-2xl font-bold'>
                {formattedCategoryName} {formattedContentType}
            </h2>

            <div className='flex space-x-4 overflow-x-scroll scrollbar-hide' ref={sliderRef}>
                {content.map((item) => (
                    <Link to={`/watch/${item.id}`} className='min-w-[250px] relative group' key={item.id}>
                        <div className='rounded-lg overflow-hidden'>
                            <img
                                src={SMALL_IMG_BASE_URL + item.backdrop_path}
                                alt='Movie image'
                                className='transition-transform duration-300 ease-in-out group-hover:scale-125'
                            />
                            <button
                                className='absolute top-2 right-2 z-10 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75'
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent the link click
                                    addToMyWatchlist(item.id,e);
                                }}
                            >
                                <Bookmark size={20} className='text-white' />
                            </button>
                        </div>
                        <p className='mt-2 text-center'>{item.title || item.name}</p>
                    </Link>
                ))}
            </div>

            {showArrows && (
                <>
                    <button
                        className='absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center
                        size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10'
                        onClick={scrollLeft}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        className='absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center
                        size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10'
                        onClick={scrollRight}
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}
        </div>
    );
};

export default MovieSlider;
