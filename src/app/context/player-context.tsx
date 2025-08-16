import React, { createContext, useState, ReactNode } from "react";

export interface PlayerContextType {
  selectedVideo: any;
  setSelectedVideo: React.Dispatch<React.SetStateAction<any>>;
  showMiniPlayer: boolean;
  setShowMiniPlayer: React.Dispatch<React.SetStateAction<boolean>>;
  videoForMiniPlayer: any;
  setVideoForMiniPlayer: React.Dispatch<React.SetStateAction<any>>;
}

export const PlayerContext = createContext<PlayerContextType>({
  selectedVideo: null,
  setSelectedVideo: () => {},
  showMiniPlayer: false,
  setShowMiniPlayer: () => {},
  videoForMiniPlayer: null,
  setVideoForMiniPlayer: () => {},
});

const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [showMiniPlayer, setShowMiniPlayer] = useState<boolean>(false);
  const [videoForMiniPlayer, setVideoForMiniPlayer] = useState<any>(null);

  const value: PlayerContextType = {
    selectedVideo,
    setSelectedVideo,
    showMiniPlayer,
    setShowMiniPlayer,
    videoForMiniPlayer,
    setVideoForMiniPlayer,
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};

export default PlayerProvider;
