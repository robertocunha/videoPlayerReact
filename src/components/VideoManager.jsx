import React from 'react';
import VideoPlayer from './VideoPlayer';

function VideoManager() {
  const videosPath = "/src/assets/videos/";
  const currentVideo = [
    { id: 0, src: `${videosPath}video01.mp4`, type: "video/mp4" },
    { id: 1, src: `${videosPath}video01.ogg`, type: "video/ogg" },
  ];

  return (
    <VideoPlayer currentVideo={currentVideo} />
  );
}

export default VideoManager;
