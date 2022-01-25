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
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import DryCleaningOutlinedIcon from "@mui/icons-material/DryCleaningOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";

interface SidebarProps {
  user: boolean;
  collapsed: boolean;
  onUserClick: () => void;
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
      {!props.collapsed && props.user && (
        <>
          <SidebarElement Icon={SlideshowIcon} title="Your Videos" />
          <SidebarElement Icon={AccessTimeIcon} title="Watch Later" />
          <SidebarElement Icon={PlaylistPlayIcon} title="Custom Playlist" />
          <SidebarElement Icon={ExpandMoreOutlinedIcon} title="Show more" />
        </>
      )}

      {!props.collapsed && (
        <>
          <div className="separator"></div>

          {!props.user && (
            <>
              <div className="signIn-prompt">
                <p className="signIn-description">
                  Sign in to like videos, comment, and subscribe.
                </p>
                <button
                  className="signIn sidebar-signIn"
                  onClick={props.onUserClick}
                >
                  <AccountCircleOutlinedIcon className="signIn-icon" />
                  <p>Sign In</p>
                </button>
              </div>

              <div className="separator"></div>
            </>
          )}

          {!props.user && (
            <>
              <p className="sidebar-group-title">Best of YouTube</p>
              <SidebarElement iconVariant Icon={MusicNoteIcon} title="Music" />
              <SidebarElement
                iconVariant
                Icon={EmojiEventsIcon}
                title="Sports"
              />
              <SidebarElement
                iconVariant
                Icon={SportsEsportsIcon}
                title="Gaming"
              />
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
                redVariant
                Icon={YouTubeIcon}
                title="Spotlight"
              />
              <SidebarElement
                iconVariant
                Icon={VrpanoIcon}
                title="360° Video"
              />

              <div className="separator"></div>
            </>
          )}

          {!props.user ? (
            <>
              <SidebarElement
                Icon={AddCircleOutlineOutlinedIcon}
                title="Browse channels"
              />

              <div className="separator"></div>
            </>
          ) : (
            <>
              <p className="sidebar-group-title">Subscriptions</p>
              <SidebarElement avatar="?" title="ABC News (Australia)" isLive />
              <SidebarElement avatar="?" title="CreepsMcPasta" isLive />
              <SidebarElement avatar="?" title="Bloomberg Quicktake" isLive />
              <SidebarElement avatar="?" title="NASA" />
              <SidebarElement avatar="?" title="avex" isLive />
              <SidebarElement avatar="?" title="Joma Tech" />
              <SidebarElement avatar="?" title="Sibonggyun 시봉균" />
              <SidebarElement
                Icon={ExpandMoreOutlinedIcon}
                title="Show 990 more"
              />

              <div className="separator"></div>
            </>
          )}

          <p className="sidebar-group-title">More from YouTube</p>
          <SidebarElement Icon={YouTubeIcon} title="YouTube Premium" />
          {props.user && (
            <>
              <SidebarElement
                Icon={TheatersOutlinedIcon}
                title={"Movies & Shows"}
              />
              <SidebarElement Icon={SportsEsportsOutlinedIcon} title="Gaming" />
            </>
          )}
          <SidebarElement Icon={SensorsIcon} title="Live" />
          {props.user && (
            <>
              <SidebarElement
                Icon={DryCleaningOutlinedIcon}
                title={"Fashion & Beauty"}
              />
              <SidebarElement Icon={LightbulbOutlinedIcon} title="Learning" />
              <SidebarElement Icon={EmojiEventsOutlinedIcon} title="Sport" />
            </>
          )}

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
