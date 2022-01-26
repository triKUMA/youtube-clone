import React, { useEffect, useState } from "react";
import "./VideoGroup.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface VideoGroupProps {
  children: React.ReactNode;
  title?: string;
  initial?: number[];
}

function VideoGroup(props: VideoGroupProps) {
  const [expanded, setExpanded] = useState(!props.initial);
  const [videos, setVideos] = useState<
    (React.ReactChild | React.ReactFragment | React.ReactPortal)[]
  >(getVideos());

  function getVideos(): (
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
  )[] {
    let vids = React.Children.toArray(props.children);

    if (!expanded && props.initial && props.initial[0] && props.initial[1]) {
      if (vids.length > props.initial[0] * props.initial[1]) {
        vids = vids.slice(0, props.initial[0] * props.initial[1]);
      } else {
        setExpanded(true);
      }
    }

    return vids;
  }

  useEffect(() => {
    setVideos(getVideos());
  }, [expanded]);

  return (
    <div className={props.title ? "titled" : ""}>
      {props.title && <p className="title">{props.title}</p>}
      <div className="videoGroup">{videos}</div>
      {!expanded && (
        <button
          className="expand"
          onClick={() => {
            setExpanded(true);
          }}
        >
          <ExpandMoreIcon className="expand-icon" />
        </button>
      )}
    </div>
  );
}

export default VideoGroup;
