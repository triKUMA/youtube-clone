import { useEffect } from "react";
import Video from "./Video";
import "./VideoFeed.css";

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
      console.log("true");
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
      {[...Array(4 * 10)].map((value: undefined, index: number) => (
        <Video
          title="This is a placeholder video title. It will clip itself when too long. I dont know if this approach is very stable, however."
          verified={Math.random() < 0.4}
        />
      ))}
    </div>
  );
}

export default VideoFeed;
