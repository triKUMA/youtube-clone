import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SidebarElement from "./SidebarElement";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarElement active={true} Icon={HomeIcon} title="Home" />
      <SidebarElement Icon={ExploreOutlinedIcon} title="Explore" />
      <SidebarElement Icon={SubscriptionsOutlinedIcon} title="Subscriptions" />
      <div className="separator"></div>
      <SidebarElement Icon={VideoLibraryOutlinedIcon} title="Library" />
      <SidebarElement Icon={HistoryOutlinedIcon} title="History" />
      <div className="separator"></div>
      <p className="signIn-description">
        Sign in to like videos, comment, and subscribe.
      </p>
      <button className="sign-in">
        <AccountCircleOutlinedIcon className="sign-in-icon" />
        <p>Sign In</p>
      </button>
      <div className="separator"></div>
    </div>
  );
}

export default Sidebar;
