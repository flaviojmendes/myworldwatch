import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import MapPage from "./pages/MapPage/MapPage";
import ReactGA from "react-ga4";


function App() {
  
  
  ReactGA.initialize('G-J500697JGS');
  ReactGA.send({hitType: "pageview", page: window.location.pathname + window.location.search});
  return (
    <Routes>
      <Route path="/" element={<MapPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
