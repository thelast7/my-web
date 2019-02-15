import React, { Component } from "react";
import SearchBar from "./video-app/SearchBar";
import youtube from "../api/youtube";
import VideoList from "./video-app/VideoList";
import VideoDetail from './video-app/VideoDetail'


class Videos extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onTermSubmit('shingeki no kyojin')
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo : video
    })
  }

  render() {
    return (
      <div className="ui container">
        <h1 className="center">Videos</h1>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="col s9">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col s3">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
