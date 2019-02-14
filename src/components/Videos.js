import React, { Component } from "react";
import SearchBar from "./video-app/SearchBar";
import youtube from "../api/youtube";
import VideoList from "./video-app/VideoList";

class Videos extends Component {
  state = {
    videos: []
  };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <h1 className="center">Videos</h1>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default Videos;
