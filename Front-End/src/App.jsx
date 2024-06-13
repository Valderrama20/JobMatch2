import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Maps from "./components/Map/Maps";
import LoginPage from "./pages/Login";
import PerfilPage from "./pages/Perfil";
import mapboxgl from "mapbox-gl";
import { Provider, useAtom } from "jotai";
import { userAtom } from "./context/atoms";
mapboxgl.accessToken =
  "pk.eyJ1IjoidmFsZGVycmFtYTIwIiwiYSI6ImNsd2dqdzJvMTAzanUybnFtYW9oYmFzNTUifQ.8PgeK1SgOx42n7FPoyylRA";

function App() {
  let [user, setUser] = useAtom(userAtom);

  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile/:name/:id" element={<PerfilPage />} />
          <Route path="/post" element={<h1>Post</h1>} />
          <Route path="/map/:category" element={<Maps />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
