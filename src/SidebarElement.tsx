import { Avatar, AvatarTypeMap, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import "./SidebarElement.css";
import SensorsIcon from "@mui/icons-material/Sensors";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

interface SidebarElementProps {
  active?: boolean;
  collapse?: boolean;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  avatar?: string;
  iconVariant?: boolean;
  redVariant?: boolean;
  title: string;
  isLive?: boolean;
  notification?: boolean;
}

function SidebarElement(props: SidebarElementProps) {
  return (
    <button
      className={
        "sidebarElement" +
        (props.active ? " active" : "") +
        (props.collapse ? " collapse" : "")
      }
    >
      {(props.Icon && (
        <props.Icon
          className={
            "icon" +
            (props.iconVariant ? " rounded" : "") +
            (props.redVariant ? " red" : "")
          }
        />
      )) ||
        (props.avatar && (
          <Avatar className="sidebarElement-avatar" src={props.avatar} />
        ))}
      <p>{props.title}</p>
      {(props.isLive && <SensorsIcon className="liveIcon" />) ||
        (props.notification && (
          <FiberManualRecordIcon className="notificationIcon" />
        ))}
    </button>
  );
}

export default SidebarElement;
