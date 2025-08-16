"use client";

import { MouseEventHandler, useContext } from "react";
import { PlayerContext } from "../context/player-context";

export const MiniPlayer = () => {
  const playerContext = useContext(PlayerContext);

  if (
    !playerContext ||
    !playerContext.showMiniPlayer ||
    !playerContext.videoForMiniPlayer
  )
    return null;

  const {
    showMiniPlayer,
    setShowMiniPlayer,
    videoForMiniPlayer,
    setVideoForMiniPlayer,
    setSelectedVideo,
  } = playerContext;

  const videoSrc = `https://www.youtube.com/embed/${videoForMiniPlayer.id}?autoplay=1`;

  const handleClose: MouseEventHandler<HTMLButtonElement> = (e) => {
    setShowMiniPlayer(false);
    setVideoForMiniPlayer(null);
  };

  const handleMaximize = () => {
    setSelectedVideo(videoForMiniPlayer);
    setShowMiniPlayer(false);
    setVideoForMiniPlayer(null);
  };

  return (
    <div
      className="fixed bottom-5 right-5 w-80 h-44 bg-gray-800 rounded-lg shadow-2xl z-50 cursor-pointer overflow-hidden group animate-slide-in"
      onClick={handleMaximize}
    >
      <div className="relative w-full h-full">
        <iframe
          className="w-full h-full"
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay;"
        ></iframe>
        <div className="absolute top-0 right-0 p-1 bg-black bg-opacity-50 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleClose}
            className="text-white hover:text-red-500"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
