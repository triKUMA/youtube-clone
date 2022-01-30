import { useState } from "react";
import "./VideoGroup.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideoMetadata from "./VideoMetadata";
import Video from "./Video";

interface VideoGroupProps {
  feed: (index: number) => VideoMetadata;
  videoRange: [number, number];
  columns: number;
  title?: string;
  initialRows?: number;
}

function VideoGroup(props: VideoGroupProps) {
  const [expanded, setExpanded] = useState(
    !props.title &&
      (!props.initialRows ||
        props.videoRange[1] <= props.initialRows * props.columns)
  );

  return (
    <div className={props.title ? "titled" : ""}>
      {props.title && <p className="title">{props.title}</p>}
      <div className="videoGroup">
        {[
          ...Array(
            !expanded && props.initialRows
              ? props.initialRows * props.columns
              : props.videoRange[1]
          ),
        ].map((_, index) => (
          <Video
            metadata={props.feed(props.videoRange[0] + index)}
            id={props.videoRange[0] + index}
          />
        ))}
      </div>
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
