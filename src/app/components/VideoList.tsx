"use client";

import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { PlayerContext } from "../context/player-context";
import { mockVideos } from "../page";

export const VideoList = () => {
  const [videos, setVideos] = useState(mockVideos);

  return (
    <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};

export const VideoItem = ({ video }: any) => {
  const { setSelectedVideo, setShowMiniPlayer } =
    useContext<any>(PlayerContext);

  const handleVideoSelect = () => {
    setSelectedVideo(video);
    setShowMiniPlayer(false);
  };

  return (
    <div
      className="cursor-pointer group transform hover:scale-105 transition-transform duration-300"
      onClick={handleVideoSelect}
    >
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full object-cover aspect-video shadow-lg"
          onError={(e: SyntheticEvent<HTMLImageElement | any>) => {
            console.log(e.target);
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/680x400/1a202c/ffffff?text=Video";
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="text-md font-semibold text-gray-800 dark:text-white">
          {video.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {video.channel}
        </p>
      </div>
    </div>
  );
};
