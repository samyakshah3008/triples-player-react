import "./App.css";
import LandingPage from "./pages/landingpage/LandingPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import VideoListingPage from "./pages/video-listing-page/VideoListingPage";
import LikePage from "./pages/likepage/LikePage";
import HistoryPage from "./pages/historypage/HistoryPage";
import PlaylistPage from "./pages/playlist/PlaylistPage";
import Watchlaterpage from "./pages/watchlaterpage/Watchlaterpage";
import LoginPage from "./pages/loginpage/LoginPage";
import Signuppage from "./pages/signuppage/Signuppage";
import SingleVideoPage from "./pages/singlevideopage/SingleVideoPage";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/videolisting" element={<VideoListingPage />}></Route>
        <Route path="/like" element={<LikePage />}></Route>
        <Route path="/history" element={<HistoryPage />}></Route>
        <Route path="/playlist" element={<PlaylistPage />}></Route>
        <Route path="/watchlater" element={<Watchlaterpage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<Signuppage />}></Route>
        <Route
          path="/videolisting/:videoId"
          element={<SingleVideoPage />}
        ></Route>
        <Route path="/mockman" element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
