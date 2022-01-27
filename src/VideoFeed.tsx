import React, { useEffect, useReducer, useState } from "react";
import FeedBanner from "./FeedBanner";
import Video from "./Video";
import "./VideoFeed.css";
import VideoGroup from "./VideoGroup";
import Channel from "./Channel";
import {
  RandCovidMetadata,
  RandTrendingMetadata,
  RandVideoMetadata,
} from "./RandomData";

function VideoFeed() {
  const [videoColumns, setVideoColumns] = useState(getVideoColumnsAmt());

  function getVideoColumnsAmt(): number {
    let columnsAmt = 5;
    if (window.innerWidth <= 495) {
      columnsAmt = 1;
    } else if (window.innerWidth <= 870) {
      columnsAmt = 2;
    } else if (window.innerWidth <= 1130) {
      columnsAmt = 3;
    } else if (window.innerWidth <= 1950) {
      columnsAmt = 4;
    }

    document.documentElement.style.setProperty(
      "--video-columns",
      columnsAmt.toString()
    );

    return columnsAmt;
  }

  window.addEventListener("resize", () => {
    setVideoColumns(getVideoColumnsAmt());
  });

  return (
    <div className="videoFeed">
      <VideoGroup>
        {[...Array(2 * videoColumns)].map((value: undefined, index: number) => (
          <Video metadata={RandVideoMetadata()} />
        ))}
      </VideoGroup>
      <VideoGroup title="Trending" initial={[1, videoColumns]}>
        {[...Array(3 * videoColumns)].map((value: undefined, index: number) => (
          <Video metadata={RandTrendingMetadata()} />
        ))}
      </VideoGroup>
      <VideoGroup>
        {[...Array(3 * videoColumns)].map((value: undefined, index: number) => (
          <Video metadata={RandVideoMetadata()} />
        ))}
      </VideoGroup>
      <VideoGroup title="COVID-19 news" initial={[1, videoColumns]}>
        {[...Array(1 * videoColumns)].map((value: undefined, index: number) => (
          <Video metadata={RandCovidMetadata()} />
        ))}
      </VideoGroup>
      <VideoGroup>
        {[...Array(3 * videoColumns)].map((value: undefined, index: number) => (
          <Video metadata={RandVideoMetadata()} />
        ))}
      </VideoGroup>
      {videoColumns >= 4 && (
        <FeedBanner
          imgSrc="https://www.gstatic.com/youtube/img/promos/growth/24130705fcdd89c3d8453b2253b97e4ec8ee91660021ac874249f99ab7e2f015_480x270.png"
          title="Trending this month: Creators you can't miss"
          desc="Check out up-and-coming creators in our new monthly playlist"
          cta="Explore Now"
          darkVariant
        />
      )}
      <VideoGroup>
        {[...Array(6 * videoColumns)].map((value: undefined, index: number) => (
          <Video metadata={RandVideoMetadata()} />
        ))}
      </VideoGroup>
      {videoColumns >= 4 && (
        <FeedBanner
          imgSrc="https://www.gstatic.com/youtube/img/promos/growth/de0fdfa3872e7bcb579ee98472aa76e8166046950ef7c0d7887a7de7534949ba_480x270.png"
          title="Making YouTube Safer"
          desc="We are committed to creating a responsible platform. Our products and policies help protect our community from harmful content."
          cta="Learn More"
        />
      )}
      <VideoGroup>
        {[...Array(4 * videoColumns)].map((value: undefined, index: number) => (
          <Video metadata={RandVideoMetadata()} />
        ))}
      </VideoGroup>
    </div>
  );
}

export default VideoFeed;
