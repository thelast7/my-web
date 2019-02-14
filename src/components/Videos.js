import React, { Component } from "react";
import SearchBar from "./video-app/SearchBar";

class Videos extends Component {
  render() {
    return (
      <div className="ui container">
        <h1 className="center">Videos</h1>
        <SearchBar />
      </div>
    );
  }
}

export default Videos;
