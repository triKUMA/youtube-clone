import { Avatar, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import "./Menu.css";

interface MenuProps {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  avatar?: string;
  onClick?: () => void;
}

function Menu(props: MenuProps) {
  return (
    <div className="menu">
      <button className="menu-button" onClick={props.onClick}>
        {(props.Icon && <props.Icon />) ||
          (props.avatar && <Avatar className="avatar" src={props.avatar} />)}
      </button>
    </div>
  );
}

export default Menu;
