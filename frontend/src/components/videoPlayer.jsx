// import React, { useRef, useEffect } from "react";
// import videojs from "video.js";
// import "video.js/dist/video-js.css";

// export const VideoPlayer = (props) => {
//   const videoRef = useRef(null);
//   const playerRef = useRef(null);
//   const { options, onReady } = props;

//   useEffect(() => {
//     // Make sure Video.js player is only initialized once
//     if (!playerRef.current) {
//       // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
//       const videoElement = document.createElement("video-js");

//       videoElement.classList.add("vjs-big-play-centered");
//       videoRef.current.appendChild(videoElement);

//       const player = (playerRef.current = videojs(videoElement, options, () => {
//         videojs.log("player is ready");
//         onReady && onReady(player);
//       }));

//       // You could update an existing player in the `else` block here
//       // on prop change, for example:
//     } else {
//       const player = playerRef.current;

//       player.autoplay(options.autoplay);
//       player.src(options.sources);
//     }
//   }, [options, videoRef]);

//   // Dispose the Video.js player when the functional component unmounts
//   useEffect(() => {
//     const player = playerRef.current;

//     return () => {
//       if (player && !player.isDisposed()) {
//         player.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, [playerRef]);

//   return (
//     <div
//       data-vjs-player
//       style={{ width: "600px" }}
//     >
//       <div ref={videoRef} />
//     </div>
//   );
// };

// export default VideoPlayer;


// new code

// import React, { useRef, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import videojs from 'video.js'; // Assuming you are using video.js for the video player

// const VideoPlayer = () => {
//   // const { lessonId } = useParams(); // Get lessonId from URL params
//   const lessonId  = "0f97e39c-2689-46f6-bd4c-98887f96e59a"; // Get lessonId from URL params
//   const playerRef = useRef(null);

//   // You can map lessonId to the corresponding video source
//   // const videoSourceMap = {
//   //   '2e3a3b15-1337-4c66-807b-a44f9b44550c': 'http://localhost:8000/uploads/courses/2e3a3b15-1337-4c66-807b-a44f9b44550c/index.m3u8',
//   //   // Add other lessonId mappings if necessary
//   // };

//   const videoPlayerOptions = {
//     controls: true,
//     responsive: true,
//     fluid: true,
//     sources: [
//       {
//         src: videoSourceMap[lessonId], // Use lessonId to fetch the correct video
//         type: 'application/x-mpegURL'
//       }
//     ]
//   };

//   useEffect(() => {
//     if (playerRef.current) return; // Prevent duplicate initialization
//     const videoElement = document.querySelector('.video-js');

//     // Initialize video.js player
//     const player = videojs(videoElement, videoPlayerOptions, () => {
//       console.log('Player is ready');
//     });

//     // Save player instance
//     playerRef.current = player;

//     return () => {
//       if (playerRef.current) {
//         playerRef.current.dispose(); // Clean up the player on component unmount
//         playerRef.current = null;
//       }
//     };
//   }, [lessonId]); // Re-run if lessonId changes

//   return (
//     <div>
//       <h2>Playing lesson: {lessonId}</h2>
//       <video className="video-js vjs-default-skin" controls preload="auto" />
//     </div>
//   );
// };

// export default VideoPlayer;

// VideoPlayer.js

// import React, { useRef, useEffect } from "react";
// import videojs from "video.js";
// import "video.js/dist/video-js.css";
// import "./videoPlayer.css";

// const VideoPlayer = (props) => {
//   const videoRef = useRef(null);
//   const playerRef = useRef(null);
//   const { lessonId, videoTitle, videoUrl } = props;

//   const videoOptions = {
//     controls: true,
//     responsive: true,
//     fluid: true,
//     autoplay: false,
//     preload: "auto",
//     sources: [
//       {
//         src: videoUrl,
//         type: "application/x-mpegURL",
//       },
//     ],
//   };

//   useEffect(() => {
//     if (!playerRef.current) {
//       const videoElement = document.createElement("video-js");
//       videoElement.classList.add("vjs-big-play-centered", "vjs-theme-city");
//       videoRef.current.appendChild(videoElement);

//       const player = (playerRef.current = videojs(videoElement, videoOptions, () => {
//         videojs.log("Player is ready");
//       }));

//       player.on("error", () => {
//         console.error("An error occurred while playing the video");
//       });
//     } else {
//       const player = playerRef.current;
//       player.src(videoOptions.sources);
//     }

//     return () => {
//       if (playerRef.current) {
//         playerRef.current.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, [videoOptions]);

//   return (
//     <div className="video-container">
//       <h2 className="video-title">{videoTitle}</h2>
//       <div data-vjs-player>
//         <div ref={videoRef} className="video-js vjs-default-skin" />
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;


// new code 2:
// import React, { useRef, useEffect } from "react";
// import videojs from "video.js";
// import "video.js/dist/video-js.css";

// const VideoPlayer = (props) => {
//   const videoRef = useRef(null);
//   const playerRef = useRef(null);
//   const { options, onReady } = props;

//   useEffect(() => {
//     // Ensure Video.js player is only initialized once
//     if (!playerRef.current) {
//       const videoElement = document.createElement("video-js");
//       videoElement.classList.add("vjs-big-play-centered");
//       videoRef.current.appendChild(videoElement);

//       const player = (playerRef.current = videojs(videoElement, options, () => {
//         videojs.log("Player is ready");
//         onReady && onReady(player);
//       }));
//     } else {
//       const player = playerRef.current;
//       player.autoplay(options.autoplay);
//       player.src(options.sources);
//     }
//   }, [options, videoRef]);

//   // Dispose the Video.js player when the functional component unmounts
//   useEffect(() => {
//     const player = playerRef.current;
//     return () => {
//       if (player && !player.isDisposed()) {
//         player.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, [playerRef]);

//   return (
    
//     <div className="flex items-center justify-center  hero h-screen bg-cover bg-center" >
//       <div className="bg-black rounded-lg shadow-lg p-4 max-w-xl w-full">
//         <h2 className="text-xl font-semibold text-center mb-4">{options.title || "Video Player"}</h2>
//         <div data-vjs-player>
//           <div ref={videoRef} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;


// new code 3:
// import React, { useRef, useEffect } from "react";
// import videojs from "video.js";
// import "video.js/dist/video-js.css";

// const VideoPlayer = (props) => {
//   const videoRef = useRef(null);
//   const playerRef = useRef(null);
//   const { options, onReady } = props;

//   useEffect(() => {
//     // Ensure Video.js player is only initialized once
//     if (!playerRef.current) {
//       const videoElement = document.createElement("video-js");
//       videoElement.classList.add("vjs-big-play-centered");
//       videoRef.current.appendChild(videoElement);

//       const player = (playerRef.current = videojs(videoElement, options, () => {
//         videojs.log("Player is ready");
//         onReady && onReady(player);
//       }));
//     } else {
//       const player = playerRef.current;
//       player.autoplay(options.autoplay);
//       player.src(options.sources);
//     }

//     // Event listener for keyboard controls
//     const handleKeyDown = (event) => {
//       const player = playerRef.current;

//       if (event.key === "f") {
//         // Toggle full screen
//         if (document.fullscreenElement) {
//           document.exitFullscreen();
//         } else {
//           videoRef.current.requestFullscreen();
//         }
//       } else if (event.key === "ArrowRight") {
//         // Fast forward by 10 seconds
//         if (player) {
//           player.currentTime(player.currentTime() + 10);
//         }
//       } else if (event.key === "ArrowLeft") {
//         // Rewind by 10 seconds
//         if (player) {
//           player.currentTime(player.currentTime() - 10);
//         }
//       }
//     };

//     // Add event listener for keyboard controls
//     document.addEventListener("keydown", handleKeyDown);

//     // Cleanup the event listener on component unmount
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [options, videoRef]);

//   // Dispose the Video.js player when the functional component unmounts
//   useEffect(() => {
//     const player = playerRef.current;
//     return () => {
//       if (player && !player.isDisposed()) {
//         player.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, [playerRef]);

//   return (
//     <div className="flex items-center justify-center hero h-screen bg-cover bg-center">
//       <div className="bg-black rounded-lg shadow-lg p-4 max-w-xl w-full">
//         <h2 className="text-xl font-semibold text-center mb-4">{options.title || "Video Player"}</h2>
//         <div data-vjs-player>
//           <div ref={videoRef} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;

// new code 4:
// import React, { useRef, useEffect } from "react";
// import videojs from "video.js";
// import "video.js/dist/video-js.css";

// const VideoPlayer = (props) => {
//   const videoRef = useRef(null);
//   const playerRef = useRef(null);
//   const { options, onReady } = props;

  
//   useEffect(() => {
//     // Ensure Video.js player is only initialized once
//     if (!playerRef.current) {
//       const videoElement = document.createElement("video-js");
//       videoElement.classList.add("vjs-big-play-centered");
//       videoRef.current.appendChild(videoElement);

//       const player = (playerRef.current = videojs(videoElement, options, () => {
//         videojs.log("Player is ready");
//         onReady && onReady(player);
//       }));
//     } else {
//       const player = playerRef.current;
//       player.autoplay(options.autoplay);
//       player.src(options.sources);
//     }

//     // Event listener for keyboard controls
//     const handleKeyDown = (event) => {
//       const player = playerRef.current;

//       if (event.key === "f") {
//         // Toggle full screen
//         if (document.fullscreenElement) {
//           document.exitFullscreen();
//         } else {
//           videoRef.current.requestFullscreen();
//         }
//       } else if (event.key === "ArrowRight") {
//         // Fast forward by 10 seconds
//         if (player) {
//           player.currentTime(player.currentTime() + 10);
//         }
//       } else if (event.key === "ArrowLeft") {
//         // Rewind by 10 seconds
//         if (player) {
//           player.currentTime(player.currentTime() - 10);
//         }
//       } else if (event.key === " ") {
//         // Toggle play/pause
//         if (player) {
//           if (player.paused()) {
//             player.play();
//           } else {
//             player.pause();
//           }
//           event.preventDefault(); // Prevent the default scroll action
//         }
//       }
//     };

//     // Add event listener for keyboard controls
//     document.addEventListener("keydown", handleKeyDown);

//     // Cleanup the event listener on component unmount
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [options, videoRef]);

//   // Dispose the Video.js player when the functional component unmounts
//   useEffect(() => {
//     const player = playerRef.current;
//     return () => {
//       if (player && !player.isDisposed()) {
//         player.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, [playerRef]);

//   return (
//     <div className="flex items-center justify-center hero h-screen bg-cover bg-center">
//       <div className="bg-black rounded-lg shadow-lg p-4 max-w-xl w-full">
//         <h2 className="text-xl font-semibold text-center mb-4">{options.title || "Video Player"}</h2>
//         <div data-vjs-player>
//           <div ref={videoRef} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;
// new code 4.1
// import React, { useRef, useEffect, useState } from "react";
// import videojs from "video.js";
// import "video.js/dist/video-js.css";

// const VideoPlayer = (props) => {
//   const videoRef = useRef(null);
//   const playerRef = useRef(null);
//   const [currentTime, setCurrentTime] = useState("");
//   const { options, onReady } = props;

//   useEffect(() => {
//     // Ensure Video.js player is only initialized once
//     if (!playerRef.current) {
//       const videoElement = document.createElement("video-js");
//       videoElement.classList.add("vjs-big-play-centered");
//       videoRef.current.appendChild(videoElement);

//       const player = (playerRef.current = videojs(videoElement, options, () => {
//         videojs.log("Player is ready");
//         onReady && onReady(player);
//       }));
//     } else {
//       const player = playerRef.current;
//       player.autoplay(options.autoplay);
//       player.src(options.sources);
//     }

//     // Add subtitle tracks if provided
//     if (options.tracks) {
//       options.tracks.forEach(track => {
//         playerRef.current.addRemoteTextTrack(track, false);
//       });
//     }

//     // Event listener for keyboard controls
//     const handleKeyDown = (event) => {
//       const player = playerRef.current;

//       if (event.key === "f") {
//         // Toggle full screen
//         if (document.fullscreenElement) {
//           document.exitFullscreen();
//         } else {
//           videoRef.current.requestFullscreen();
//         }
//       } else if (event.key === "ArrowRight") {
//         // Fast forward by 10 seconds
//         if (player) {
//           player.currentTime(player.currentTime() + 10);
//         }
//       } else if (event.key === "ArrowLeft") {
//         // Rewind by 10 seconds
//         if (player) {
//           player.currentTime(player.currentTime() - 10);
//         }
//       } else if (event.key === " ") {
//         // Toggle play/pause
//         if (player) {
//           if (player.paused()) {
//             player.play();
//           } else {
//             player.pause();
//           }
//           event.preventDefault(); // Prevent the default scroll action
//         }
//       }
//     };

//     // Update current time when the video is playing
//     const updateCurrentTime = () => {
//       const player = playerRef.current;
//       if (player) {
//         setCurrentTime(player.currentTime().toFixed(2)); // Keep 2 decimal places
//       }
//     };

//     // Add event listener for keyboard controls
//     document.addEventListener("keydown", handleKeyDown);
//     const intervalId = setInterval(updateCurrentTime, 1000);

//     // Cleanup the event listener on component unmount
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       clearInterval(intervalId);
//     };
//   }, [options, videoRef]);

//   // Dispose the Video.js player when the functional component unmounts
//   useEffect(() => {
//     const player = playerRef.current;
//     return () => {
//       if (player && !player.isDisposed()) {
//         player.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, [playerRef]);

//   const handleMouseMove = (event) => {
//     // Show current time when hovering over the player
//     const rect = videoRef.current.getBoundingClientRect();
//     const mouseX = event.clientX - rect.left;
//     const percentage = mouseX / rect.width;
//     const time = percentage * playerRef.current.duration();
//     setCurrentTime(time.toFixed(2));
//   };

//   return (
//     <div className="flex items-center justify-center hero h-screen bg-cover bg-center">
//       <div className="bg-black rounded-lg shadow-lg p-4 max-w-xl w-full relative">
//         <h2 className="text-xl font-semibold text-center mb-4">{options.title || "Video Player"}</h2>
//         <div data-vjs-player onMouseMove={handleMouseMove}>
//           <div ref={videoRef} />
//           {currentTime && (
//             <div className="absolute bottom-0 left-0 mb-2 ml-2 bg-black text-white p-1 rounded">
//               {currentTime}s
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;
// new code 4.2
import React, { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [currentTime, setCurrentTime] = useState("");
  const { options, onReady } = props;

  useEffect(() => {
    // Ensure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("Player is ready");
        onReady && onReady(player);
      }));
    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }

    // Add subtitle tracks if provided
    if (options.tracks) {
      options.tracks.forEach(track => {
        playerRef.current.addRemoteTextTrack(track, false);
      });
    }

    // Event listener for keyboard controls
    const handleKeyDown = (event) => {
      const player = playerRef.current;

      if (event.key === "f") {
        // Toggle full screen
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          videoRef.current.requestFullscreen();
        }
      } else if (event.key === "ArrowRight") {
        // Fast forward by 10 seconds
        if (player) {
          player.currentTime(player.currentTime() + 10);
        }
      } else if (event.key === "ArrowLeft") {
        // Rewind by 10 seconds
        if (player) {
          player.currentTime(player.currentTime() - 10);
        }
      } else if (event.key === " ") {
        // Toggle play/pause
        if (player) {
          if (player.paused()) {
            player.play();
          } else {
            player.pause();
          }
          event.preventDefault(); // Prevent the default scroll action
        }
      }
    };

    // Update current time when the video is playing
    const updateCurrentTime = () => {
      const player = playerRef.current;
      if (player) {
        setCurrentTime(player.currentTime().toFixed(2)); // Keep 2 decimal places
      }
    };

    // Add event listener for keyboard controls
    document.addEventListener("keydown", handleKeyDown);
    const intervalId = setInterval(updateCurrentTime, 1000);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearInterval(intervalId);
    };
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  const handleMouseMove = (event) => {
    // Show current time when hovering over the player
    const rect = videoRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const percentage = mouseX / rect.width;
    const time = percentage * playerRef.current.duration();
    setCurrentTime(time.toFixed(2));
  };

  return (
    <div className="flex items-center justify-center hero h-screen bg-cover bg-center">
      <div className="bg-black rounded-lg shadow-lg p-4 max-w-xl w-full relative">
        <h2 className="text-xl font-semibold text-center mb-4">{options.title || "Video Player"}</h2>
        <div data-vjs-player onMouseMove={handleMouseMove}>
          <div ref={videoRef} />
          {currentTime && (
            <div className="absolute bottom-0 left-0 mb-2 ml-2 bg-black text-white p-1 rounded">
              {currentTime}s
            </div>
          )}
        </div>
        {/* Caption Styling */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-opacity-50 bg-black text-white p-2 rounded text-center">
          {/* Replace this with dynamic caption display */}
          {/* Example Caption Text */}
          {options.captions ? options.captions : "Captions will appear here."}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
