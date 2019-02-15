import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const listvideo = videos.map(video => {
    return <VideoItem video={video} onVideoSelect={onVideoSelect} />;
  });

  return <div>{listvideo}</div>;
};

export default VideoList;
