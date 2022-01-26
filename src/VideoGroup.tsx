import "./VideoGroup.css";

interface VideoGroupProps {
  children: React.ReactNode;
  title?: string;
}

function VideoGroup(props: VideoGroupProps) {
  return (
    <div className={"videoGroup" + (props.title ? " titled" : "")}>
      {props.children}
    </div>
  );
}

export default VideoGroup;
