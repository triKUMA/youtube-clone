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
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined";
import TranslateIcon from "@mui/icons-material/Translate";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";

interface HeaderProps {
  user: boolean;
  onMenuClick: () => void;
  sidebarCollapsed: boolean;
  onUserClick: () => void;
}

function Header(props: HeaderProps) {
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
        {props.user && (
          <Menu
            menuIcon={VideoCameraFrontOutlinedIcon}
            items={[{ Icon: YouTubeIcon, title: "" }]}
          />
        )}
        <Menu
          menuIcon={AppsIcon}
          items={[
            {
              Icon: LiveTvIcon,
              title: "YouTube TV",
              redVariant: true,
              breakAfter: true,
            },
            {
              Icon: PlayCircleOutlineIcon,
              title: "YouTube Music",
              redVariant: true,
            },
            {
              Icon: ChildCareIcon,
              title: "YouTube Kids",
              redVariant: true,
              breakAfter: true,
            },
            {
              Icon: YouTubeIcon,
              title: "YouTube for Artists",
              redVariant: true,
            },
          ]}
        />
        {props.user ? (
          <Menu
            menuIcon={NotificationsOutlinedIcon}
            items={[{ Icon: YouTubeIcon, title: "" }]}
          />
        ) : (
          <Menu
            menuIcon={MoreVertIcon}
            items={[
              {
                Icon: Brightness2OutlinedIcon,
                title: "Appearance: Light",
                expandable: true,
              },
              {
                Icon: TranslateIcon,
                title: "Language: English",
                expandable: true,
              },
              {
                Icon: LanguageIcon,
                title: "Location: Australia",
                expandable: true,
              },
              {
                Icon: SettingsOutlinedIcon,
                title: "Settings",
              },
              {
                Icon: ContactPageOutlinedIcon,
                title: "Your data in YouTube",
              },
              {
                Icon: HelpOutlineIcon,
                title: "Help",
              },
              {
                Icon: FeedbackOutlinedIcon,
                title: "Send feedback",
              },
              {
                Icon: KeyboardAltOutlinedIcon,
                title: "Keyboard shortcuts",
                breakAfter: true,
              },
              {
                title: "Restricted Mode: Off",
                expandable: true,
              },
            ]}
          />
        )}
        {props.user ? (
          <Menu menuIcon="?" items={[{ Icon: YouTubeIcon, title: "" }]} />
        ) : (
          <button className="signIn" onClick={props.onUserClick}>
            <AccountCircleOutlinedIcon className="signIn-icon" />
            <p>Sign In</p>
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
