import React from "react";
import "./Header.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "./Menu";
import { Avatar } from "@mui/material";

interface HeaderProps {
  onMenuClick: () => void;
  sidebarCollapsed: boolean;
}

function Header(props: HeaderProps) {
  const user: any = false;

  return (
    <div className="header">
      <div className="header-left">
        <button className="header-menu" onClick={props.onMenuClick}>
          <MenuIcon className="header-menuIcon" />
        </button>
        <button className="header-logo">
          <YouTubeIcon className="header-icon" />
          <p className="header-title">YouTube</p>
          <p className="locale">AU</p>
        </button>
      </div>
      <form className="header-search">
        <input type="text" placeholder="Search" />
        <button className="header-search-submit" type="submit">
          <SearchIcon />
        </button>
        <button className="header-search-voice">
          <MicIcon />
        </button>
      </form>
      <div className="header-right">
        {user && <Menu Icon={VideoCameraFrontOutlinedIcon} />}
        <Menu Icon={AppsIcon} />
        {user ? (
          <Menu Icon={NotificationsOutlinedIcon} />
        ) : (
          <Menu Icon={MoreVertIcon} />
        )}
        {user ? (
          <Menu avatar="?" />
        ) : (
          <button className="signIn">
            <AccountCircleOutlinedIcon className="signIn-icon" />
            <p>Sign In</p>
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
