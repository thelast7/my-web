import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="card-small" style={{ cursor: "pointer" }} key={video.id.videoId} onClick={() => onVideoSelect(video)} >
      <ul class="collection">
        <li class="collection-item avatar">
          <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
          <span class="title">{video.snippet.title}</span>
          <p>{video.snippet.description}</p>
        </li>
      </ul>
    </div>
  );
};

export default VideoItem;
