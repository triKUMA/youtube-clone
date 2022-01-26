import React from "react";
import "./VideoGroup.css";

interface VideoGroupProps {
  children: React.ReactNode;
  title?: string;
}

function VideoGroup(props: VideoGroupProps) {
  return (
    <div className={props.title ? "titled" : ""}>
      {props.title && <p className="title">{props.title}</p>}
      <div className="videoGroup">{props.children}</div>
    </div>
  );
}

export default VideoGroup;
