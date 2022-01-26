import { useEffect } from "react";
import FeedBanner from "./FeedBanner";
import Video from "./Video";
import "./VideoFeed.css";
import VideoGroup from "./VideoGroup";

function VideoFeed() {
  let videoColumns: number;

  function getVideoColumnsAmt(returnVar: number) {
    if (window.innerWidth <= 495) {
      returnVar = 1;
    } else if (window.innerWidth <= 870) {
      returnVar = 2;
    } else if (window.innerWidth <= 1130) {
      returnVar = 3;
    } else if (window.innerWidth <= 1950) {
      returnVar = 4;
    } else {
      returnVar = 5;
    }

    document.documentElement.style.setProperty(
      "--video-colums",
      returnVar.toString()
    );
  }

  useEffect(() => {
    getVideoColumnsAmt(videoColumns);
  }, []);

  window.addEventListener("resize", () => {
    getVideoColumnsAmt(videoColumns);
  });

  return (
    <div className="videoFeed">
      <VideoGroup>
        {[...Array(2 * 4)].map((value: undefined, index: number) => (
          <Video
            title="This is a placeholder video title. It will clip itself when too long. I dont know if this approach is very stable, though."
            verified={Math.random() < 0.4}
          />
        ))}
      </VideoGroup>
      <VideoGroup title="Trending">
        {[...Array(1 * 4)].map((value: undefined, index: number) => (
          <Video
            title="This is a placeholder video title. It will clip itself when too long. I dont know if this approach is very stable, though."
            verified={Math.random() < 0.4}
          />
        ))}
      </VideoGroup>
      <VideoGroup>
        {[...Array(3 * 4)].map((value: undefined, index: number) => (
          <Video
            title="This is a placeholder video title. It will clip itself when too long. I dont know if this approach is very stable, though."
            verified={Math.random() < 0.4}
          />
        ))}
      </VideoGroup>
      <VideoGroup title="COVID-19 news">
        {[...Array(1 * 4)].map((value: undefined, index: number) => (
          <Video
            title="This is a placeholder video title. It will clip itself when too long. I dont know if this approach is very stable, though."
            verified={Math.random() < 0.4}
          />
        ))}
      </VideoGroup>
      <VideoGroup>
        {[...Array(3 * 4)].map((value: undefined, index: number) => (
          <Video
            title="This is a placeholder video title. It will clip itself when too long. I dont know if this approach is very stable, though."
            verified={Math.random() < 0.4}
          />
        ))}
      </VideoGroup>
      <FeedBanner
        imgSrc="https://www.gstatic.com/youtube/img/promos/growth/24130705fcdd89c3d8453b2253b97e4ec8ee91660021ac874249f99ab7e2f015_480x270.png"
        title="Trending this month: Creators you can't miss"
        desc="Check out up-and-coming creators in our new monthly playlist"
        cta="Explore Now"
        darkVariant
      />
      <VideoGroup>
        {[...Array(5 * 4)].map((value: undefined, index: number) => (
          <Video
            title="This is a placeholder video title. It will clip itself when too long. I dont know if this approach is very stable, though."
            verified={Math.random() < 0.4}
          />
        ))}
      </VideoGroup>
      <FeedBanner
        imgSrc="https://www.gstatic.com/youtube/img/promos/growth/de0fdfa3872e7bcb579ee98472aa76e8166046950ef7c0d7887a7de7534949ba_480x270.png"
        title="Making YouTube Safer"
        desc="We are committed to creating a responsible platform. Our products and policies help protect our community from harmful content."
        cta="Learn More"
      />
      <VideoGroup>
        {[...Array(4 * 4)].map((value: undefined, index: number) => (
          <Video
            title="This is a placeholder video title. It will clip itself when too long. I dont know if this approach is very stable, though."
            verified={Math.random() < 0.4}
          />
        ))}
      </VideoGroup>
    </div>
  );
}

export default VideoFeed;
