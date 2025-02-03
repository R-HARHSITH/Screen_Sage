import { useState,useEffect } from 'react'
import {Route,Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Verify_screen from './pages/home/verify_screen';
import { useAuthStore } from './store/authUser.js';
import { Toaster } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import NotFoundPage from './pages/404.jsx';
import SearchPage from './pages/searchPage.jsx'
import SearchHistoryPage from './pages/searchHistory.jsx';
import { useRef } from 'react';
import WatchlistPage from './pages/watchlisstPage.jsx';

import VideoPlayer from './components/videoPlayer.jsx';
import VideoLink from './components/videoLink.jsx';
import './App.css';
import HomeScreen from './pages/home/homescreen.jsx';
import ProfilePage from './pages/profile.jsx';



function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();
  const [count, setCount] = useState(0)
  const playerRef = useRef(null);
  const videoLink = "http://localhost:5000/backend/uploads/courses/60781dff-2fa6-42ac-a071-def989222541/index.m3u8";

  useEffect(() => {
    authCheck();
}, [authCheck]);
  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL"
      }
    ],
    tracks: [
      {
        kind: "subtitles",
        src: "http://localhost:5000/backend/uploads/courses/your-subtitles.vtt",
        srclang: "en",
        label: "English",
        default: true
      }
    ]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <>
     <Routes>
      <Route path='/' element={<Verify_screen/>}></Route>
      <Route path='/login' element={user?<HomeScreen/>:<LoginPage/>}></Route>
      <Route path='/profile' element={user?<ProfilePage/>:<LoginPage/>}></Route>
      <Route path='/signup' element={user?<HomeScreen/>:<SignupPage/>}></Route>
				<Route path='/search' element={user ? <SearchPage /> : <Navigate to={"/login"} />} />
				<Route path='/history' element={user ? <SearchHistoryPage /> : <Navigate to={"/login"} />} />
        <Route path='/watchlist_your' element={user?<WatchlistPage/>:<Navigate to={"/login"} />}></Route>
				
        {/* Route to render VideoPlayer dynamically with lessonId */}
        <Route path="/watch/:lessonId" element={user ? <VideoPlayer options={videoPlayerOptions}
      onReady={handlePlayerReady} /> : <Navigate to={"/login"} />}/>

        {/* Home page with VideoLink to navigate to the /watch/:lessonId */}
        <Route path="/" element={
          <div>
            <h1>Home Page</h1>
            <VideoLink lessonId="0f97e39c-2689-46f6-bd4c-98887f96e59a" />
          </div>
        } />
      <Route path='/*' element={<NotFoundPage />} />
      </Routes>
     <Toaster />
    </>
  )
}

export default App
