import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TopicsBar from "./TopicsBar";
import VideoFeed from "./VideoFeed";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [user, setUser] = useState(false);

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
