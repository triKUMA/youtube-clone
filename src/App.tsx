import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TopicsBar from "./TopicsBar";
import VideoFeed from "./VideoFeed";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    window.innerWidth <= 1310
  );
  const [user, setUser] = useState(false);

  window.addEventListener("resize", () => {
    if (!sidebarCollapsed && window.innerWidth <= 1310) {
      setSidebarCollapsed(true);
    } else if (sidebarCollapsed && window.innerWidth > 1310) {
      setSidebarCollapsed(false);
    }
  });

  return (
    <div className="App">
      <Header
        user={user}
        sidebarCollapsed={sidebarCollapsed}
        onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)}
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
