import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Topics from "./Topics";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [user, setUser] = useState(true);

  return (
    <div className="App">
      <Header
        user={user}
        sidebarCollapsed={sidebarCollapsed}
        onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className="body">
        <Sidebar user={user} collapsed={sidebarCollapsed} />
        <div className="feed">
          <Topics />
          <div className="videos">
            {[...Array(4 * 10)].map((value: undefined, index: number) => (
              <div className="video">
                <div className="video-thumbnail"></div>

                <div className="video-description">
                  <p>Description</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <nav>
        <p>This is the header.</p>
      </nav>
      <div className="body">
        <div className="sidebar">
          {[...Array(15)].map((value: undefined, index: number) => (
            <div className="sidebar-element">
              <p>This is element {index + 1}</p>
            </div>
          ))}
        </div>
        <div className="feed">
          <div id="#" className="topics-bar">
            {[...Array(20)].map((value: undefined, index: number) => (
              <div className="topic">
                <p>Topic {index + 1}</p>
              </div>
            ))}
          </div>
          <div className="videos">
            {[...Array(4 * 10)].map((value: undefined, index: number) => (
              <div className="video">
                <p className="video-thumbnail">This is video {index + 1}</p>
                <div className="video-description">
                  <p>Description</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* <Header />

      <div className="body">
        <Sidebar />
        <div className="body-main">
          <Topics />
          <p className="test">Test</p>
          <p className="test">Test</p>
          <p className="test">Test</p>
          <p className="test">Test</p>
          <p className="test">Test</p>
          <p className="test">Test</p>
          <p className="test">Test</p>
          <p className="test">Test</p>
          <p className="test">Test</p>
          <p className="test">Test</p>
          <p className="test">Test</p>
          <p className="test">Test</p>
          <p className="test">Test</p>
          <p className="test">Test</p>
          <p className="test">Test</p>
          <p className="test">Test</p>
          <p className="test">Test</p>
          <p className="test">Test</p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
