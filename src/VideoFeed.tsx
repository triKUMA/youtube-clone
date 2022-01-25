import React, { Component } from "react";
import Video from "./Video";
import "./VideoFeed.css";

export default class VideoFeed extends Component {
  render() {
    return (
      <div className="videoFeed">
        {[...Array(4 * 10)].map((value: undefined, index: number) => (
          <Video
            title="This is a fake video title. It will not clip itself when too long."
            verified
          />
        ))}
      </div>
    );
  }
}
