import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./contexts/video-listing-context";
import { AuthProvider } from "./contexts/auth-context";
import { LikeProvider } from "./contexts/like-context";
import { WatchLaterProvider } from "./contexts/watch-later-context";
import { HistoryProvider } from "./contexts/history-context";
import { CreatePlaylistProvider } from "./contexts/playlist-context";

// Call make Server
makeServer();




const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
<CreatePlaylistProvider>
      
        <HistoryProvider>
          <WatchLaterProvider>
            <LikeProvider>
              <AuthProvider>
                <VideoProvider>
                  <App />
                </VideoProvider>
              </AuthProvider>
            </LikeProvider>
          </WatchLaterProvider>
        </HistoryProvider>
        </CreatePlaylistProvider>
    </BrowserRouter>
  </React.StrictMode>
);
