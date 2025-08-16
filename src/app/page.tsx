"use client";

import React, { useContext } from "react";
import { PlayerContext } from "../context/player-context";
import { VideoList } from "../components/VideoList";
import { VideoPlayer } from "../components/VideoPlayer";

// MiniPlayer Component

// --- Main App Component ---
export default function App() {
  const { selectedVideo } = useContext<any>(PlayerContext);

  return (
    <div className="">
      {selectedVideo ? <VideoPlayer /> : null}
      <div
        className={
          selectedVideo
            ? "mt-4 border-t border-gray-200 dark:border-gray-700"
            : ""
        }
      >
        <VideoList />
      </div>
    </div>
  );
}
