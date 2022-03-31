import "./App.css";
import LandingPage from "./pages/landingpage/LandingPage";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element = {<LandingPage/>}></Route>
      <Route path="/navbar" element = {<Navbar/>}></Route>


    </Routes>


         </div>
  );
}

export default App;
