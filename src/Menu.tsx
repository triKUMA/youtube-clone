import { Avatar, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import "./Menu.css";

interface MenuProps {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  avatar?: string;
}

function Menu({ Icon, avatar }: MenuProps) {
  return (
    <div className="menu">
      <button className="menu-button">
        {(Icon && <Icon />) ||
          (avatar && <Avatar className="avatar" src={avatar} />)}
      </button>
    </div>
  );
}

export default Menu;
