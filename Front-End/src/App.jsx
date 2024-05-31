import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Maps from "./components/Map/Maps";
import Landing from "./pages/Landing";
import LoginPage from "./pages/Login";
import PerfilPage from "./pages/Perfil";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoidmFsZGVycmFtYTIwIiwiYSI6ImNsd2dqdzJvMTAzanUybnFtYW9oYmFzNTUifQ.8PgeK1SgOx42n7FPoyylRA";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<PerfilPage />} />
        <Route path="/post" element={<h1>Post</h1>} />
        <Route path="/map/:category" element={<Maps />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
