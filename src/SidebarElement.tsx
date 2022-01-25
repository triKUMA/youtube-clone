import { Avatar, AvatarTypeMap, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import "./SidebarElement.css";
import SensorsIcon from "@mui/icons-material/Sensors";

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
      {props.isLive && <SensorsIcon className="liveIcon" />}
    </button>
  );
}

export default SidebarElement;
