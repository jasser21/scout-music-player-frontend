import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Playlist from "./components/playlist/Playlist";
import Login from "./components/login/Login";
import Aboutus from "./components/aboutus/Aboutus";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="*" element={<Home />} />
        {/* not yet  */}
      </Routes>
    </>
  );
}

export default App;
