import { useContext } from "react";
import { PlayerContext } from "../context/player-context";

export const VideoPlayer = () => {
  const {
    selectedVideo,
    setSelectedVideo,
    setShowMiniPlayer,
    setVideoForMiniPlayer,
  }: any = useContext(PlayerContext);

  if (!selectedVideo) return null;

  const handleMinimize = () => {
    setVideoForMiniPlayer(selectedVideo);
    setSelectedVideo(null);
    setShowMiniPlayer(true);
  };

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`;

  return (
    <div className="p-4 sm:p-6">
      <div className="w-full flex gap-16">
        <div className="relative w-2/3 aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg "
            src={videoSrc}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-1/3">
          <h1 className="text-xl text-white font-black">
            {selectedVideo.title}
          </h1>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {selectedVideo.title}
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-400">
            {selectedVideo.channel}
          </p>
        </div>
        <button
          onClick={handleMinimize}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
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
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
          <span>Minimize</span>
        </button>
      </div>
    </div>
  );
};
