import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./contexts/video-listing-context";
import { AuthProvider } from "./contexts/auth-context";
import { LikeProvider } from "./contexts/like-context";
import { WatchLaterProvider } from "./contexts/watch-later-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WatchLaterProvider>
        <LikeProvider>
          <AuthProvider>
            <VideoProvider>
              <App />
            </VideoProvider>
          </AuthProvider>
        </LikeProvider>
      </WatchLaterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
