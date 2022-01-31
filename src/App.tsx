import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TopicsBar from "./TopicsBar";
import VideoFeed from "./VideoFeed";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [user, setUser] = useState(false);

  function updateSidebar(value: boolean) {
    setSidebarCollapsed(value);

    let sidebarWidth = "0em";
    if (window.innerWidth > 1310) {
      sidebarWidth = !value ? "15em" : "4.5em";
    } else if (window.innerWidth > 792) {
      sidebarWidth = !value ? "15em" : "4.5em";
    } else {
      sidebarWidth = !value ? "15em" : "0em";
    }

    let adjustedSidebarWidth = "0em";
    if (window.innerWidth > 1310) {
      adjustedSidebarWidth = !value ? "15em" : "4.5em";
    } else if (window.innerWidth > 792) {
      adjustedSidebarWidth = "4.5em";
    } else {
      adjustedSidebarWidth = "0em";
    }

    document.documentElement.style.setProperty("--sidebar-width", sidebarWidth);

    document.documentElement.style.setProperty(
      "--sidebar-width-adjustment",
      adjustedSidebarWidth
    );
  }

  useEffect(() => {
    updateSidebar(window.innerWidth <= 1310);
  }, []);

  window.addEventListener("resize", () => {
    if (sidebarCollapsed && window.innerWidth > 1310) {
      updateSidebar(false);
    } else if (!sidebarCollapsed && window.innerWidth <= 1310) {
      updateSidebar(true);
    }
  });

  return (
    <div className="App">
      <Header
        user={user}
        sidebarCollapsed={sidebarCollapsed}
        onMenuClick={() => updateSidebar(!sidebarCollapsed)}
        onUserClick={() => setUser(!user)}
      />
      <div className="body">
        <Sidebar
          user={user}
          collapsed={sidebarCollapsed}
          onUserClick={() => setUser(!user)}
        />
        <div className="feed">
          <TopicsBar />
          <VideoFeed />
        </div>
      </div>
    </div>
  );
}

export default App;
