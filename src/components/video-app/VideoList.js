import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const listvideo = videos.map(video => {
    return <VideoItem video={video} />;
  });

  return <div>{listvideo}</div>;
};

export default VideoList;
