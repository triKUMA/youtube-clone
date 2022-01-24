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
  title: string;
}

function SidebarElement({ active, Icon, title }: SidebarElementProps) {
  return (
    <button className={active ? "sidebarElement active" : "sidebarElement"}>
      {<Icon className="icon" />}
      <p>{title}</p>
    </button>
  );
}

export default SidebarElement;
