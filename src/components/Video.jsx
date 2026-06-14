import { useState } from "react";
import VIdeoPlayer from "./VIdeoPlayer";

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false);
  return (
      <div>
          <button onClick={() => setIsPlaying((pre) => !pre)}>
              {isPlaying ? 'Pause' : 'Play'}
          </button>
          <VIdeoPlayer
              isPlaying={isPlaying}
              src={
                  'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
              }
          />
      </div>
  );
};

export default Video;