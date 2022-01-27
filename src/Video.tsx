import { Avatar } from "@mui/material";
import React from "react";
import "./Video.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Menu from "./Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Channel from "./Channel";
import VideoMetadata from "./VideoMetadata";

interface VideoProps {
  metadata: VideoMetadata;
}

function Video({ metadata }: VideoProps) {
  const vidPlaceholder =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Freactnativecode.com%2Fwp-content%2Fuploads%2F2018%2F02%2FDefault_Image_Thumbnail.png&f=1&nofb=1";

  function getVideoAge(then: Date): string {
    const now = new Date();
    const secondDiff = now.getSeconds() - then.getSeconds();
    const minuteDiff = now.getMinutes() - then.getMinutes();
    const hourDiff = now.getHours() - then.getHours();
    const dayDiff = now.getDate() - then.getDate();
    const monthDiff = now.getMonth() - then.getMonth();
    const yearDiff = now.getFullYear() - then.getFullYear();

    if (yearDiff > 0) {
      return yearDiff + " year" + (yearDiff !== 1 ? "s" : "");
    } else if (monthDiff > 0) {
      return monthDiff + " month" + (monthDiff !== 1 ? "s" : "");
    } else if (dayDiff > 0) {
      return dayDiff + " day" + (dayDiff !== 1 ? "s" : "");
    } else if (hourDiff > 0) {
      return hourDiff + " hour" + (hourDiff !== 1 ? "s" : "");
    } else if (minuteDiff > 0) {
      return monthDiff + " minute" + (monthDiff !== 1 ? "s" : "");
    }

    return secondDiff + " second" + (secondDiff !== 1 ? "s" : "");
  }

  function getVideoLength(length: Date): string {
    const isOverHour = length.getHours() > 0;
    return (
      (isOverHour ? length.getHours() + ":" : "") +
      length.getMinutes() +
      ":" +
      length.getSeconds()
    );
  }

  function getVideoViews(views: number): string {
    return views < 1000 ? "" + views : Math.floor(views / 1000) + "k";
  }

  return (
    <div className="video">
      <button>
        <img
          className="video-thumbnail"
          src={metadata.thumbnail ? metadata.thumbnail : vidPlaceholder}
        />
        <p className="video-length">{getVideoLength(metadata.length)}</p>
        <div className="video-details">
          <button>
            <Avatar
              className="channel-avatar"
              src={metadata.channel.profileUrl}
            />
          </button>
          <div className="video-details-text">
            <p className="video-title">{metadata.title}</p>
            <div className="channel-name">
              <button>{metadata.channel.name}</button>
              {metadata.channel.verified && (
                <CheckCircleIcon className="verified" />
              )}
            </div>

            <div className="video-stats">
              <p className="video-views">
                {getVideoViews(metadata.views)} views
              </p>
              <FiberManualRecordIcon className="stats-separator" />
              <p className="video-age">{getVideoAge(metadata.age)} ago</p>
            </div>
          </div>
          <div className="video-menu">
            <Menu Icon={MoreVertIcon} />
          </div>
        </div>
      </button>
    </div>
  );
}

export default Video;
