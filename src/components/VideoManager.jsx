import React from 'react';
import VideoService from '../services/VideoService';
import VideoSelector from './VideoSelector';
import VideoPlayer from './VideoPlayer';

function VideoManager() {
  const videosPath = "/src/assets/videos/";
  const videos = VideoService.getAllVideos();
  
  const currentVideo = [];
  videos[0].formats.map((format) => 
    currentVideo.push({
        id: format.formatId, 
        src: `${videosPath}${format.src}`, 
        type: format.type
    })
  );

  return (
    <>
        <VideoPlayer currentVideo={currentVideo} />
        <VideoSelector videos={videos} />
    </>
  );
}

export default VideoManager;
