import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import "./SidebarElement.css";

interface SidebarElementProps {
  active?: boolean;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  iconVariant?: boolean;
  youtubeVariant?: boolean;
  title: string;
}

function SidebarElement({
  active,
  Icon,
  iconVariant,
  youtubeVariant,
  title,
}: SidebarElementProps) {
  return (
    <button className={active ? "sidebarElement active" : "sidebarElement"}>
      {
        <Icon
          className={
            "icon" +
            (iconVariant ? " rounded" : "") +
            (youtubeVariant ? " red" : "")
          }
        />
      }
      <p>{title}</p>
    </button>
  );
}

export default SidebarElement;
