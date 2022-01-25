import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import "./SidebarElement.css";

interface SidebarElementProps {
  active?: boolean;
  collapse?: boolean;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  iconVariant?: boolean;
  youtubeVariant?: boolean;
  title: string;
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
      {
        <props.Icon
          className={
            "icon" +
            (props.iconVariant ? " rounded" : "") +
            (props.youtubeVariant ? " red" : "")
          }
        />
      }
      <p>{props.title}</p>
    </button>
  );
}

export default SidebarElement;
