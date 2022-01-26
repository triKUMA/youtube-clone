import { Avatar } from "@mui/material";
import React from "react";
import "./Video.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Menu from "./Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Channel from "./Channel";

interface VideoProps {
  thumbnail?: string;
  title: string;
  channel: Channel;
  verified?: boolean;
}

function Video(props: VideoProps) {
  const vidPlaceholder =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Freactnativecode.com%2Fwp-content%2Fuploads%2F2018%2F02%2FDefault_Image_Thumbnail.png&f=1&nofb=1";

  return (
    <div className="video">
      <button>
        <img
          className="video-thumbnail"
          src={props.thumbnail ? props.thumbnail : vidPlaceholder}
        />
        <p className="video-length">2:49</p>
        <div className="video-details">
          <button>
            <Avatar className="channel-avatar" src={props.channel.profileUrl} />
          </button>
          <div className="video-details-text">
            <p className="video-title">{props.title}</p>
            <div className="channel-name">
              <button>{props.channel.name}</button>
              {props.verified && <CheckCircleIcon className="verified" />}
            </div>

            <div className="video-stats">
              <p className="video-views">442K views</p>
              <FiberManualRecordIcon className="stats-separator" />
              <p className="video-age">6 days ago</p>
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
