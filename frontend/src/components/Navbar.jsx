// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { LogOut, Menu, Search } from "lucide-react";
// import { useAuthStore } from "../store/authUser";
// import { useContentStore } from "../store/content";

// const Navbar = () => {
// 	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// 	const { user, logout } = useAuthStore();

// 	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

// 	const { setContentType } = useContentStore();

// 	return (
// 		<header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
// 			<div className='flex items-center gap-10 z-50'>
// 				<Link to='/'>
// 					<img src='/logo1.png' alt='Netflix Logo' className='w-20 h-20' />
// 				</Link>

// 				{/* desktop navbar items */}
// 				<div className='hidden sm:flex gap-2 items-center'>
// 					<Link to='/' className='hover:underline' onClick={() => setContentType("movie")}>
// 						Movies
// 					</Link>
// 					<Link to='/' className='hover:underline' onClick={() => setContentType("tv")}>
// 						Tv Shows
// 					</Link>
// 					<Link to='/history' className='hover:underline'>
// 						Search History
// 					</Link>
// 				</div>
// 			</div>

// 			<div className='flex gap-2 items-center z-50'>
// 				<Link to={"/search"}>
// 					<Search className='size-6 cursor-pointer' />
// 				</Link>
// 				{/* <img src={user.image} alt='Avatar' className='h-8 rounded cursor-pointer' /> */}
// 				<LogOut className='size-6 cursor-pointer' onClick={logout} />
// 				<div className='sm:hidden'>
// 					<Menu className='size-6 cursor-pointer' onClick={toggleMobileMenu} />
// 				</div>
// 			</div>

// 			{/* mobile navbar items */}
// 			{isMobileMenuOpen && (
// 				<div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800'>
// 					<Link to={"/"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
// 						Movies
// 					</Link>
// 					<Link to={"/"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
// 						Tv Shows
// 					</Link>
// 					<Link to={"/history"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
// 						Search History
// 					</Link>
// 				</div>
// 			)}
// 		</header>
// 	);
// };
// export default Navbar;


// new code 2
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { LogOut, Menu, Search } from "lucide-react";
// import { useAuthStore } from "../store/authUser";
// import { useContentStore } from "../store/content";
// // import useGetGenres from "../hooks/fetchGeners";

// const Navbar = () => {
// 	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// 	const [isGenresOpen, setIsGenresOpen] = useState(false);
// 	const { user, logout } = useAuthStore();
// 	// const genres = useGetGenres(); // Fetch genres using your custom hook

// 	// const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
// 	// const toggleGenresDropdown = () => setIsGenresOpen(!isGenresOpen);

// 	const { setContentType } = useContentStore();

// 	return (
// 		<header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20 bg-black border-b border-gray-800'>
// 			<div className='flex items-center gap-10 z-50'>
// 				<Link to='/'>
// 					<img src='/logo1.png' alt='Netflix Logo' className='w-20 h-20' />
// 				</Link>

// 				{/* Desktop Navbar Items */}
// 				<div className='hidden sm:flex gap-2 items-center relative'>
// 					{/* <div className='relative'>
// 						<button className='hover:underline text-white' onClick={toggleGenresDropdown}>
// 							Genres
// 						</button>
// 						{isGenresOpen && (
// 							<div className='absolute left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded shadow-lg z-10'>
// 								{genres.map((genre) => (
// 									<Link
// 										key={genre.id}
// 										to={`/genre/${genre.id}`}
// 										className='block px-4 py-2 text-white hover:bg-gray-700'
// 										onClick={() => {
// 											setIsGenresOpen(false);
// 											setContentType("movie"); // Assuming you want to set content type
// 										}}
// 									>
// 										{genre.name}
// 									</Link>
// 								))}
// 							</div>
// 						)}
// 					</div> */}
// 					<Link to='/' className='hover:underline text-white' onClick={() => setContentType("movie")}>
// 						Movies
// 					</Link>
// 					<Link to='/' className='hover:underline text-white' onClick={() => setContentType("tv")}>
// 						Tv Shows
// 					</Link>
// 					<Link to='/history' className='hover:underline text-white'>
// 						Search History
// 					</Link>
// 				</div>
// 			</div>

// 			<div className='flex gap-2 items-center z-50'>
// 				<Link to={"/search"}>
// 					<Search className='size-6 cursor-pointer text-white' />
// 				</Link>
// 				<LogOut className='size-6 cursor-pointer text-white' onClick={logout} />
// 				<div className='sm:hidden'>
// 					<Menu className='size-6 cursor-pointer text-white' onClick={toggleMobileMenu} />
// 				</div>
// 			</div>

// 			{/* Mobile Navbar Items */}
// 			{isMobileMenuOpen && (
// 				<div className='w-full sm:hidden mt-4 z-50 bg-gray-800 border rounded border-gray-700'>
// 					<Link to={"/"} className='block hover:underline text-white p-2' onClick={toggleMobileMenu}>
// 						Movies
// 					</Link>
// 					<Link to={"/"} className='block hover:underline text-white p-2' onClick={toggleMobileMenu}>
// 						Tv Shows
// 					</Link>
// 					<Link to={"/history"} className='block hover:underline text-white p-2' onClick={toggleMobileMenu}>
// 						Search History
// 					</Link>
// 				</div>
// 			)}
// 		</header>
// 	);
// };

// export default Navbar;

// new code 2

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { LogOut, Menu, Search } from "lucide-react";
// import { useAuthStore } from "../store/authUser";
// import { useContentStore } from "../store/content";

// const Navbar = () => {
// 	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// 	const { user, logout } = useAuthStore();
// 	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
// 	const { setContentType } = useContentStore();

// 	return (
// 		<header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
// 			<div className='flex items-center gap-10 z-50'>
// 				<Link to='/'>
// 					<img src='/logo1.png' alt='Netflix Logo' className='w-20 h-20' />
// 				</Link>
// 			</div>

// 			{/* Centered Navbar Items */}
// 			<div className='hidden sm:flex flex-1 justify-center items-center gap-10 z-50'>
// 				<Link to='/' className='text-white hover:text-red-500 transition-colors duration-300' onClick={() => setContentType("movie")}>
// 					Movies
// 				</Link>
// 				<Link to='/' className='text-white hover:text-red-500 transition-colors duration-300' onClick={() => setContentType("tv")}>
// 					Tv Shows
// 				</Link>
// 				<Link to='/history' className='text-white hover:text-red-500 transition-colors duration-300'>
// 					Search History
// 				</Link>
// 			</div>

// 			<div className='flex gap-2 items-center z-50'>
// 				<Link to={"/search"}>
// 					<Search className='text-white size-6 cursor-pointer' />
// 				</Link>
// 				<LogOut className='text-white size-6 cursor-pointer' onClick={logout} />
// 				<div className='sm:hidden'>
// 					<Menu className='text-white size-6 cursor-pointer' onClick={toggleMobileMenu} />
// 				</div>
// 			</div>

// 			{/* Mobile Navbar Items */}
// 			{isMobileMenuOpen && (
// 				<div className='w-full sm:hidden mt-4 z-50 bg-gray-800 border rounded border-gray-700'>
// 					<Link to={"/"} className='block text-white hover:bg-gray-700 p-2 transition duration-300' onClick={toggleMobileMenu}>
// 						Movies
// 					</Link>
// 					<Link to={"/"} className='block text-white hover:bg-gray-700 p-2 transition duration-300' onClick={toggleMobileMenu}>
// 						Tv Shows
// 					</Link>
// 					<Link to={"/history"} className='block text-white hover:bg-gray-700 p-2 transition duration-300' onClick={toggleMobileMenu}>
// 						Search History
// 					</Link>
// 				</div>
// 			)}
// 		</header>
// 	);
// };

// export default Navbar;


// new code 3
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { LogOut, Menu, Search } from "lucide-react";
// import { useAuthStore } from "../store/authUser";
// import { useContentStore } from "../store/content";

// const Navbar = () => {
// 	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// 	const [activeLink, setActiveLink] = useState("movie"); // Default active link
// 	const { user, logout } = useAuthStore();
// 	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
// 	const { setContentType } = useContentStore();

// 	const handleLinkClick = (type) => {
// 		setContentType(type);
// 		setActiveLink(type); // Set the active link
// 	};

// 	return (
// 		<header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
// 			<div className='flex items-center gap-10 z-50'>
// 				<Link to='/'>
// 					<img src='/logo1.png' alt='Netflix Logo' className='w-20 h-20' />
// 				</Link>
// 			</div>

// 			{/* Centered Navbar Items */}
// 			<div className='hidden sm:flex flex-1 justify-center items-center gap-10 z-50'>
// 				<Link
// 					to='/'
// 					className={`text-white transition-colors duration-300 ${activeLink === "movie" ? 'text-red-500' : 'hover:text-red-500'}`}
// 					onClick={() => handleLinkClick("movie")}
// 				>
// 					Movies
// 				</Link>
// 				<Link
// 					to='/'
// 					className={`text-white transition-colors duration-300 ${activeLink === "tv" ? 'text-red-500' : 'hover:text-red-500'}`}
// 					onClick={() => handleLinkClick("tv")}
// 				>
// 					Tv Shows
// 				</Link>
// 				<Link
// 					to='/history'
// 					className={`text-white transition-colors duration-300 ${activeLink === "history" ? 'text-red-500' : 'hover:text-red-500'}`}
// 					onClick={() => handleLinkClick("history")}
// 				>
// 					Search History
// 				</Link>
// 			</div>

// 			<div className='flex gap-2 items-center z-50'>
// 				<Link to={"/search"}>
// 					<Search className='text-white size-6 cursor-pointer' />
// 				</Link>
// 				<LogOut className='text-white size-6 cursor-pointer' onClick={logout} />
// 				<div className='sm:hidden'>
// 					<Menu className='text-white size-6 cursor-pointer' onClick={toggleMobileMenu} />
// 				</div>
// 			</div>

// 			{/* Mobile Navbar Items */}
// 			{isMobileMenuOpen && (
// 				<div className='w-full sm:hidden mt-4 z-50 bg-gray-800 border rounded border-gray-700'>
// 					<Link
// 						to={"/"}
// 						className='block text-white hover:bg-gray-700 p-2 transition duration-300'
// 						onClick={() => {
// 							handleLinkClick("movie");
// 							toggleMobileMenu();
// 						}}
// 					>
// 						Movies
// 					</Link>
// 					<Link
// 						to={"/"}
// 						className='block text-white hover:bg-gray-700 p-2 transition duration-300'
// 						onClick={() => {
// 							handleLinkClick("tv");
// 							toggleMobileMenu();
// 						}}
// 					>
// 						Tv Shows
// 					</Link>
// 					<Link
// 						to={"/history"}
// 						className='block text-white hover:bg-gray-700 p-2 transition duration-300'
// 						onClick={() => {
// 							handleLinkClick("history");
// 							toggleMobileMenu();
// 						}}
// 					>
// 						Search History
// 					</Link>
// 				</div>
// 			)}
// 		</header>
// 	);
// };

// export default Navbar;
// new code 4
import { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, Menu, Search } from "lucide-react";
import { useAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("movies"); // Track active link
	const { user, logout } = useAuthStore();
	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
	const { setContentType } = useContentStore();

	const handleLinkClick = (link) => {
		setActiveLink(link);
		setContentType(link === "movies" ? "movie" : "tv"); // Set content type based on link
	};

	return (
		<header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
			<div className='flex items-center gap-10 z-50'>
				<Link to='/'>
					<img src='/logo1.png' alt='Netflix Logo' className='w-20 h-20' />
				</Link>
			</div>

			{/* Centered Navbar Items */}
			<div className='hidden sm:flex flex-1 justify-center items-center gap-10 z-50'>
				<Link
					to='/'
					className={`transition-colors duration-300 ${
						activeLink === "movies" ? "text-red-500 font-bold" : "text-white hover:text-red-500"
					}`}
					onClick={() => handleLinkClick("movies")}
				>
					Movies
				</Link>
				<Link
					to='/'
					className={`transition-colors duration-300 ${
						activeLink === "tv" ? "text-red-500 font-bold" : "text-white hover:text-red-500"
					}`}
					onClick={() => handleLinkClick("tv")}
				>
					Tv Shows
				</Link>
				<Link
					to='/history'
					className={`transition-colors duration-300 ${
						activeLink === "history" ? "text-red-500 font-bold" : "text-white hover:text-red-500"
					}`}
					onClick={() => handleLinkClick("history")}
				>
					Search History
				</Link>
				<Link
					to='/watchlist_your'
					className={`transition-colors duration-300 ${
						activeLink === "history" ? "text-red-500 font-bold" : "text-white hover:text-red-500"
					}`}
					onClick={() => handleLinkClick("my_watch")}
				>
					My Watchlists
				</Link>
			</div>

			<div className='flex gap-2 items-center z-50'>
				<Link to={"/search"}>
					<Search className='text-white size-6 cursor-pointer' />
				</Link>
				<LogOut className='text-white size-6 cursor-pointer' onClick={logout} />
				<div className='sm:hidden'>
					<Menu className='text-white size-6 cursor-pointer' onClick={toggleMobileMenu} />
				</div>
			</div>

			{/* Mobile Navbar Items */}
			{isMobileMenuOpen && (
				<div className='w-full sm:hidden mt-4 z-50 bg-gray-800 border rounded border-gray-700'>
					<Link
						to={"/"}
						className='block text-white hover:bg-gray-700 p-2 transition duration-300'
						onClick={() => {
							handleLinkClick("movies");
							toggleMobileMenu();
						}}
					>
						Movies
					</Link>
					<Link
						to={"/"}
						className='block text-white hover:bg-gray-700 p-2 transition duration-300'
						onClick={() => {
							handleLinkClick("tv");
							toggleMobileMenu();
						}}
					>
						Tv Shows
					</Link>
					<Link
						to={"/history"}
						className='block text-white hover:bg-gray-700 p-2 transition duration-300'
						onClick={() => {
							handleLinkClick("history");
							toggleMobileMenu();
						}}
					>
						Search History
					</Link>
				</div>
			)}
		</header>
	);
};

export default Navbar;
// new code 4.o
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { LogOut, Menu, Search, User } from "lucide-react"; // Import User icon
// import { useAuthStore } from "../store/authUser";
// import { useContentStore } from "../store/content";

// const Navbar = () => {
// 	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// 	const [activeLink, setActiveLink] = useState("movies"); // Track active link
// 	const { user, logout } = useAuthStore();
// 	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
// 	const { setContentType } = useContentStore();

// 	const handleLinkClick = (link) => {
// 		setActiveLink(link);
// 		setContentType(link === "movies" ? "movie" : "tv"); // Set content type based on link
// 	};

// 	return (
// 		<header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
// 			<div className='flex items-center gap-10 z-50'>
// 				<Link to='/'>
// 					<img src='/logo1.png' alt='Netflix Logo' className='w-20 h-20' />
// 				</Link>
// 			</div>

// 			{/* Centered Navbar Items */}
// 			<div className='hidden sm:flex flex-1 justify-center items-center gap-10 z-50'>
// 				<Link
// 					to='/'
// 					className={`transition-colors duration-300 ${
// 						activeLink === "movies" ? "text-red-500 font-bold" : "text-white hover:text-red-500"
// 					}`}
// 					onClick={() => handleLinkClick("movies")}
// 				>
// 					Movies
// 				</Link>
// 				<Link
// 					to='/'
// 					className={`transition-colors duration-300 ${
// 						activeLink === "tv" ? "text-red-500 font-bold" : "text-white hover:text-red-500"
// 					}`}
// 					onClick={() => handleLinkClick("tv")}
// 				>
// 					Tv Shows
// 				</Link>
// 				<Link
// 					to='/history'
// 					className={`transition-colors duration-300 ${
// 						activeLink === "history" ? "text-red-500 font-bold" : "text-white hover:text-red-500"
// 					}`}
// 					onClick={() => handleLinkClick("history")}
// 				>
// 					Search History
// 				</Link>
// 				<Link
// 					to='/watchlist_your'
// 					className={`transition-colors duration-300 ${
// 						activeLink === "watchlist" ? "text-red-500 font-bold" : "text-white hover:text-red-500"
// 					}`}
// 					onClick={() => handleLinkClick("my_watch")}
// 				>
// 					My Watchlists
// 				</Link>
// 			</div>

// 			<div className='flex gap-2 items-center z-50'>
// 				<Link to={"/search"}>
// 					<Search className='text-white size-6 cursor-pointer' />
// 				</Link>
// 				<Link to={"/profile"}> {/* Add profile link */}
// 					<User className='text-white size-6 cursor-pointer' /> {/* Profile icon */}
// 				</Link>
// 				<LogOut className='text-white size-6 cursor-pointer' onClick={logout} />
// 				<div className='sm:hidden'>
// 					<Menu className='text-white size-6 cursor-pointer' onClick={toggleMobileMenu} />
// 				</div>
// 			</div>

// 			{/* Mobile Navbar Items */}
// 			{isMobileMenuOpen && (
// 				<div className='w-full sm:hidden mt-4 z-50 bg-gray-800 border rounded border-gray-700'>
// 					<Link
// 						to={"/"}
// 						className='block text-white hover:bg-gray-700 p-2 transition duration-300'
// 						onClick={() => {
// 							handleLinkClick("movies");
// 							toggleMobileMenu();
// 						}}
// 					>
// 						Movies
// 					</Link>
// 					<Link
// 						to={"/"}
// 						className='block text-white hover:bg-gray-700 p-2 transition duration-300'
// 						onClick={() => {
// 							handleLinkClick("tv");
// 							toggleMobileMenu();
// 						}}
// 					>
// 						Tv Shows
// 					</Link>
// 					<Link
// 						to={"/history"}
// 						className='block text-white hover:bg-gray-700 p-2 transition duration-300'
// 						onClick={() => {
// 							handleLinkClick("history");
// 							toggleMobileMenu();
// 						}}
// 					>
// 						Search History
// 					</Link>
// 				</div>
// 			)}
// 		</header>
// 	);
// };

// export default Navbar;
// new code 4.0.1
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { LogOut, Menu, Search, User, Edit } from "lucide-react";
// import { useAuthStore } from "../store/authUser";
// import { useContentStore } from "../store/content";

// const Navbar = () => {
// 	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// 	const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
// 	const [activeLink, setActiveLink] = useState("movies");
// 	const { user, logout } = useAuthStore();
// 	const { setContentType } = useContentStore();
// 	const navigate = useNavigate();

// 	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
// 	const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

// 	const handleLinkClick = (link) => {
// 		setActiveLink(link);
// 		setContentType(link === "movies" ? "movie" : "tv");
// 	};

// 	return (
// 		<header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
// 			<div className='flex items-center gap-10 z-50'>
// 				<Link to='/'>
// 					<img src='/logo1.png' alt='Netflix Logo' className='w-20 h-20' />
// 				</Link>
// 			</div>

// 			<div className='hidden sm:flex flex-1 justify-center items-center gap-10 z-50'>
// 				<Link
// 					to='/'
// 					className={`transition-colors duration-300 ${
// 						activeLink === "movies" ? "text-red-500 font-bold" : "text-white hover:text-red-500"
// 					}`}
// 					onClick={() => handleLinkClick("movies")}
// 				>
// 					Movies
// 				</Link>
// 				<Link
// 					to='/'
// 					className={`transition-colors duration-300 ${
// 						activeLink === "tv" ? "text-red-500 font-bold" : "text-white hover:text-red-500"
// 					}`}
// 					onClick={() => handleLinkClick("tv")}
// 				>
// 					Tv Shows
// 				</Link>
// 				<Link
// 					to='/history'
// 					className={`transition-colors duration-300 ${
// 						activeLink === "history" ? "text-red-500 font-bold" : "text-white hover:text-red-500"
// 					}`}
// 					onClick={() => handleLinkClick("history")}
// 				>
// 					Search History
// 				</Link>
// 				<Link
// 					to='/watchlist_your'
// 					className={`transition-colors duration-300 ${
// 						activeLink === "watchlist" ? "text-red-500 font-bold" : "text-white hover:text-red-500"
// 					}`}
// 					onClick={() => handleLinkClick("my_watch")}
// 				>
// 					My Watchlists
// 				</Link>
// 			</div>

// 			<div className='flex gap-2 items-center z-50'>
// 				<Link to={"/search"}>
// 					<Search className='text-white size-6 cursor-pointer' />
// 				</Link>

// 				{/* Profile Icon with Dropdown */}
// 				<div className='relative'>
// 					<div onClick={toggleProfileDropdown} className='cursor-pointer'>
// 						<User className='text-white size-6' />
// 					</div>
// 					{isProfileDropdownOpen && (
// 						<div className='absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg p-4'>
// 							<div className='flex items-center gap-2'>
// 								<img
// 									src={user?.profilePhoto || "/default-avatar.png"} // Replace with actual profile photo URL
// 									alt='Profile'
// 									className='w-8 h-8 rounded-full'
// 								/>
// 								<span>{user?.name || "Guest"}</span>
// 							</div>
// 							<button
// 								className='flex items-center gap-2 mt-3 text-sm text-blue-500 hover:text-blue-300'
// 								onClick={() => navigate("/profile")}
// 							>
// 								<Edit className='w-4 h-4' />
// 								<span>Edit Profile</span>
// 							</button>
// 						</div>
// 					)}
// 				</div>

// 				<LogOut className='text-white size-6 cursor-pointer' onClick={logout} />
// 				<div className='sm:hidden'>
// 					<Menu className='text-white size-6 cursor-pointer' onClick={toggleMobileMenu} />
// 				</div>
// 			</div>

// 			{isMobileMenuOpen && (
// 				<div className='w-full sm:hidden mt-4 z-50 bg-gray-800 border rounded border-gray-700'>
// 					<Link
// 						to={"/"}
// 						className='block text-white hover:bg-gray-700 p-2 transition duration-300'
// 						onClick={() => {
// 							handleLinkClick("movies");
// 							toggleMobileMenu();
// 						}}
// 					>
// 						Movies
// 					</Link>
// 					<Link
// 						to={"/"}
// 						className='block text-white hover:bg-gray-700 p-2 transition duration-300'
// 						onClick={() => {
// 							handleLinkClick("tv");
// 							toggleMobileMenu();
// 						}}
// 					>
// 						Tv Shows
// 					</Link>
// 					<Link
// 						to={"/history"}
// 						className='block text-white hover:bg-gray-700 p-2 transition duration-300'
// 						onClick={() => {
// 							handleLinkClick("history");
// 							toggleMobileMenu();
// 						}}
// 					>
// 						Search History
// 					</Link>
// 				</div>
// 			)}
// 		</header>
// 	);
// };

// export default Navbar;





// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { LogOut, Menu, Search } from "lucide-react";
// import { useAuthStore } from "../store/authUser";
// import { useContentStore } from "../store/content";

// const Navbar = () => {
// 	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// 	const [isGenresDropdownOpen, setIsGenresDropdownOpen] = useState(false);
// 	const [activeLink, setActiveLink] = useState("movies");
// 	const [genres, setGenres] = useState([]);
// 	const { user, logout } = useAuthStore();
// 	const { setContentType } = useContentStore();
// 	const navigate = useNavigate();

// 	useEffect(() => {
// 		// Fetch genres from TMDB API
// 		const fetchGenres = async () => {
// 			try {
// 				const response = await fetch(
// 					`https://api.themoviedb.org/3/genre/movie/list?api_key=9d88e942649d06a8e29f9c68d6153ba1`
// 				);
// 				const data = await response.json();
// 				setGenres(data.genres);
// 			} catch (error) {
// 				console.error("Error fetching genres:", error);
// 			}
// 		};

// 		fetchGenres();
// 	}, []);

// 	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

// 	const handleLinkClick = (link) => {
// 		setActiveLink(link);
// 		setContentType(link === "movies" ? "movie" : "tv");
// 	};

// 	const handleGenreClick = (genreId) => {
// 		setContentType("movie");
// 		// Assuming genre ID will be used in filtering
// 		// Set genre filter in store if needed, e.g., setGenre(genreId);
// 		navigate("/genres");
// 	};

// 	return (
// 		<header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
// 			<div className='flex items-center gap-10 z-50'>
// 				<Link to='/'>
// 					<img src='/logo1.png' alt='Netflix Logo' className='w-20 h-20' />
// 				</Link>
// 			</div>

// 			<div className='hidden sm:flex flex-1 justify-center items-center gap-10 z-50'>
// 				<Link
// 					to='/'
// 					className={`transition-colors duration-300 ${
// 						activeLink === "movies" ? "text-red-500 font-bold" : "text-white hover:text-red-500"
// 					}`}
// 					onClick={() => handleLinkClick("movies")}
// 				>
// 					Movies
// 				</Link>
// 				<div className="relative">
// 					<button
// 						className="text-white hover:text-red-500"
// 						onClick={() => setIsGenresDropdownOpen(!isGenresDropdownOpen)}
// 					>
// 						Genres
// 					</button>
// 					{isGenresDropdownOpen && (
// 						<div className="absolute bg-gray-800 border rounded border-gray-700 mt-2 w-40">
// 							{genres.map((genre) => (
// 								<button
// 									key={genre.id}
// 									onClick={() => handleGenreClick(genre.id)}
// 									className="block text-white hover:bg-gray-700 p-2 w-full text-left"
// 								>
// 									{genre.name}
// 								</button>
// 							))}
// 						</div>
// 					)}
// 				</div>
// 				{/* Rest of your links */}
// 			</div>
// 			{/* Other Navbar items */}
// 		</header>
// 	);
// };

// export default Navbar;
