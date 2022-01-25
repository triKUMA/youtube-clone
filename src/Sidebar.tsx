import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SidebarElement from "./SidebarElement";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TheatersIcon from "@mui/icons-material/Theaters";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SensorsIcon from "@mui/icons-material/Sensors";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import YouTubeIcon from "@mui/icons-material/YouTube";
import VrpanoIcon from "@mui/icons-material/Vrpano";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

interface SidebarProps {
  collapsed: boolean;
}

function Sidebar(props: SidebarProps) {
  document.documentElement.style.setProperty(
    "--sidebar-width",
    !props.collapsed ? "15em" : "4.5em"
  );

  return (
    <div className="sidebar">
      <SidebarElement
        collapse={props.collapsed}
        active
        Icon={HomeIcon}
        title="Home"
      />
      <SidebarElement
        collapse={props.collapsed}
        Icon={ExploreOutlinedIcon}
        title="Explore"
      />
      <SidebarElement
        collapse={props.collapsed}
        Icon={SubscriptionsOutlinedIcon}
        title="Subscriptions"
      />

      {!props.collapsed && <div className="separator"></div>}

      <SidebarElement
        collapse={props.collapsed}
        Icon={VideoLibraryOutlinedIcon}
        title="Library"
      />
      <SidebarElement
        collapse={props.collapsed}
        Icon={HistoryOutlinedIcon}
        title="History"
      />

      {!props.collapsed && (
        <>
          <div className="separator"></div>

          <div className="signIn-prompt">
            <p className="signIn-description">
              Sign in to like videos, comment, and subscribe.
            </p>
            <button className="signIn sidebar-signIn">
              <AccountCircleOutlinedIcon className="signIn-icon" />
              <p>Sign In</p>
            </button>
          </div>

          <div className="separator"></div>

          <p className="sidebar-group-title">Best of YouTube</p>
          <SidebarElement iconVariant Icon={MusicNoteIcon} title="Music" />
          <SidebarElement iconVariant Icon={EmojiEventsIcon} title="Sports" />
          <SidebarElement iconVariant Icon={SportsEsportsIcon} title="Gaming" />
          <SidebarElement
            iconVariant
            Icon={TheatersIcon}
            title={"Movies & Shows"}
          />
          <SidebarElement iconVariant Icon={NewspaperIcon} title="News" />
          <SidebarElement iconVariant Icon={SensorsIcon} title="Live" />
          <SidebarElement
            iconVariant
            Icon={DryCleaningIcon}
            title={"Fashion & Beauty"}
          />
          <SidebarElement
            iconVariant
            Icon={EmojiObjectsIcon}
            title="Learning"
          />
          <SidebarElement
            iconVariant
            youtubeVariant
            Icon={YouTubeIcon}
            title="Spotlight"
          />
          <SidebarElement iconVariant Icon={VrpanoIcon} title="360° Video" />

          <div className="separator"></div>

          <SidebarElement
            Icon={AddCircleOutlineOutlinedIcon}
            title="Browse channels"
          />

          <div className="separator"></div>

          <p className="sidebar-group-title">More from YouTube</p>
          <SidebarElement Icon={YouTubeIcon} title="YouTube Premium" />
          <SidebarElement Icon={SensorsIcon} title="Live" />

          <div className="separator"></div>

          <SidebarElement Icon={SettingsOutlinedIcon} title="Settings" />
          <SidebarElement Icon={OutlinedFlagIcon} title="Report history" />
          <SidebarElement Icon={HelpOutlineOutlinedIcon} title="Help" />
          <SidebarElement Icon={FeedbackOutlinedIcon} title="Send feedback" />

          <div className="separator"></div>

          <div className="sidebar-footer">
            <div className="sidebar-footer-group">
              <button className="sidebar-footer-entry">About</button>
              <button className="sidebar-footer-entry">Press</button>
              <button className="sidebar-footer-entry">Copyright</button>
              <button className="sidebar-footer-entry">Contact us</button>
              <button className="sidebar-footer-entry">Creators</button>
              <button className="sidebar-footer-entry">Advertise</button>
              <button className="sidebar-footer-entry">Developers</button>
            </div>
            <div className="sidebar-footer-group">
              <button className="sidebar-footer-entry">Terms</button>
              <button className="sidebar-footer-entry">Privacy</button>
              <button className="sidebar-footer-entry">
                {"Policy & Safety"}
              </button>
              <button className="sidebar-footer-entry">
                How YouTube works
              </button>
              <button className="sidebar-footer-entry">
                Test new features
              </button>
            </div>
            <p className="trademark">© 2022 Google LLC</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
