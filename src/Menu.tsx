import { Avatar, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { useState } from "react";
import "./Menu.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface MenuItem {
  Icon?:
    | (OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
      })
    | string;
  title: string;
  onClick?: () => void;
  expandable?: boolean;
  breakAfter?: boolean;
  redVariant?: boolean;
}

interface MenuProps {
  menuIcon:
    | (OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
      })
    | string;
  items: MenuItem[];
  onClick?: () => void;
  id: number;
}

function Menu(props: MenuProps) {
  const [menuDisplay, setMenuDisplay] = useState(false);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setMenuDisplay(false);
    }
  });

  const manageMenuBlur = (e: React.FocusEvent<HTMLButtonElement, Element>) => {
    const menuIcon = document.getElementsByClassName("menu-button")[
      props.id
    ] as HTMLButtonElement;
    if (
      menuIcon.parentElement !== e.relatedTarget?.parentElement?.parentElement
    ) {
      setMenuDisplay(false);
    } else {
      setTimeout(() => menuIcon.focus(), 1);
    }
  };

  return (
    <div className="menu">
      <button
        className="menu-button"
        onClick={() => {
          setMenuDisplay(!menuDisplay);
          if (typeof props.onClick !== "undefined") {
            props.onClick();
          }
        }}
        onBlur={(e) => {
          setTimeout(() => {
            manageMenuBlur(e);
          }, 100);
        }}
      >
        {typeof props.menuIcon === "string" ? (
          <Avatar className="avatar" src={props.menuIcon} />
        ) : (
          <props.menuIcon />
        )}
      </button>
      {menuDisplay && (
        <div className="menu-expanded">
          {props.items.map((item) => (
            <>
              <button className="menu-item" onClick={item.onClick}>
                <div className="menu-item-content">
                  {item.Icon &&
                    (typeof item.Icon === "string" ? (
                      <Avatar
                        className={
                          "menu-item-avatar" + (item.redVariant ? " red" : "")
                        }
                        src={item.Icon}
                      />
                    ) : (
                      <item.Icon
                        className={
                          "menu-item-icon" + (item.redVariant ? " red" : "")
                        }
                      />
                    ))}
                  <p>{item.title}</p>
                </div>
                {item.expandable && (
                  <ChevronRightIcon className="menu-item-expandIcon" />
                )}
              </button>
              {item.breakAfter && <div className="separator" />}
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
