import { useState } from "react";
import "./FeedBanner.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ClearIcon from "@mui/icons-material/Clear";

interface FeedBannerProps {
  imgSrc: string;
  title: string;
  desc: string;
  cta: string;
  darkVariant?: boolean;
}

function FeedBanner(props: FeedBannerProps) {
  const [display, setDisplay] = useState(true);

  return (
    <div
      className={
        display
          ? "feedBanner" + (props.darkVariant ? " darkVariant" : "")
          : "closedBanner"
      }
    >
      {display ? (
        <>
          <img src={props.imgSrc} />
          <div className="details">
            <div className="logo">
              <YouTubeIcon className="logo-icon" />
              <p className="logo-title">YouTube</p>
              <p className="logo-extra">Featured</p>
            </div>
            <p className="banner-title">{props.title}</p>
            <p className="banner-description">{props.desc}</p>
          </div>
          <div className="banner-right">
            <button className="cta">{props.cta}</button>
            <button
              className="minimize"
              onClick={() => {
                setDisplay(false);
              }}
            >
              <ClearIcon className="minimize-icon" />
            </button>
          </div>
        </>
      ) : (
        <>
          <p>Got it, message hidden</p>
        </>
      )}
    </div>
  );
}

export default FeedBanner;
