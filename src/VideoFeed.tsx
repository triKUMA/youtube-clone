import React, { useState } from "react";
import FeedBanner from "./FeedBanner";
import "./VideoFeed.css";
import VideoGroup from "./VideoGroup";
import {
  RandCovidMetadata,
  RandTrendingMetadata,
  RandVideoMetadata,
} from "./RandomData";
import VideoMetadata from "./VideoMetadata";

function VideoFeed() {
  const [videoColumns, setVideoColumns] = useState(getVideoColumnsAmt());
  const [generalFeed, setGeneralFeed] = useState(
    new Map<number, VideoMetadata>()
  );
  const [trendingFeed, setTrendingFeed] = useState(
    new Map<number, VideoMetadata>()
  );
  const [covidFeed, setCovidFeed] = useState(new Map<number, VideoMetadata>());

  function getVideoFromFeed(
    feed: Map<number, VideoMetadata>,
    dispatch: (value: React.SetStateAction<Map<number, VideoMetadata>>) => void,
    index: number,
    metadataStream: Function
  ): VideoMetadata {
    let entry = feed.get(index);

    if (typeof entry === "undefined") {
      let newFeed = feed;
      entry = newFeed.set(index, metadataStream()).get(index);
      dispatch(newFeed);
    }

    return typeof entry !== "undefined" ? entry : metadataStream();
  }

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
    const columnsAmt = getVideoColumnsAmt();
    setVideoColumns(columnsAmt);
  });

  return (
    <div className="videoFeed">
      <VideoGroup
        feed={(index) =>
          getVideoFromFeed(
            generalFeed,
            setGeneralFeed,
            index,
            RandVideoMetadata
          )
        }
        videoRange={[0, 2 * videoColumns]}
        columns={videoColumns}
      />
      <VideoGroup
        title="Trending"
        feed={(index) =>
          getVideoFromFeed(
            trendingFeed,
            setTrendingFeed,
            index,
            RandTrendingMetadata
          )
        }
        videoRange={[0, 3 * videoColumns]}
        columns={videoColumns}
        initialRows={1}
      />
      <VideoGroup
        feed={(index) =>
          getVideoFromFeed(
            generalFeed,
            setGeneralFeed,
            index,
            RandVideoMetadata
          )
        }
        videoRange={[2 * videoColumns, 3 * videoColumns]}
        columns={videoColumns}
      />
      <VideoGroup
        title="COVID-19 news"
        feed={(index) =>
          getVideoFromFeed(covidFeed, setCovidFeed, index, RandCovidMetadata)
        }
        videoRange={[0, 2 * videoColumns]}
        columns={videoColumns}
        initialRows={1}
      />
      <VideoGroup
        feed={(index) =>
          getVideoFromFeed(
            generalFeed,
            setGeneralFeed,
            index,
            RandVideoMetadata
          )
        }
        videoRange={[5 * videoColumns, 3 * videoColumns]}
        columns={videoColumns}
      />
      {videoColumns >= 4 && (
        <FeedBanner
          imgSrc="https://www.gstatic.com/youtube/img/promos/growth/24130705fcdd89c3d8453b2253b97e4ec8ee91660021ac874249f99ab7e2f015_480x270.png"
          title="Trending this month: Creators you can't miss"
          desc="Check out up-and-coming creators in our new monthly playlist"
          cta="Explore Now"
          darkVariant
        />
      )}
      <VideoGroup
        feed={(index) =>
          getVideoFromFeed(
            generalFeed,
            setGeneralFeed,
            index,
            RandVideoMetadata
          )
        }
        videoRange={[8 * videoColumns, 6 * videoColumns]}
        columns={videoColumns}
      />
      {videoColumns >= 4 && (
        <FeedBanner
          imgSrc="https://www.gstatic.com/youtube/img/promos/growth/de0fdfa3872e7bcb579ee98472aa76e8166046950ef7c0d7887a7de7534949ba_480x270.png"
          title="Making YouTube Safer"
          desc="We are committed to creating a responsible platform. Our products and policies help protect our community from harmful content."
          cta="Learn More"
        />
      )}
      <VideoGroup
        feed={(index) =>
          getVideoFromFeed(
            generalFeed,
            setGeneralFeed,
            index,
            RandVideoMetadata
          )
        }
        videoRange={[4 * videoColumns, 4 * videoColumns]}
        columns={videoColumns}
      />
    </div>
  );
}

export default VideoFeed;
