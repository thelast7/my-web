import React from 'react'

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>loading..</div>
  }

  const videoPlay = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="video-container">
        <iframe src={videoPlay} title={video.snippet.title} />
      </div>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
    </div>
  )
}

export default VideoDetail