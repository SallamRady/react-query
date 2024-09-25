import MainNavbar from "./components/MainNavbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SuperHerosPage from "./pages/SuperHerosPage";
import RQSuperHeroPage from "./pages/RQSuperHeroPage";

function App() {
  return (
    <div>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/super-heroes" element={<SuperHerosPage />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroPage />} />
      </Routes>
    </div>
  );
}

export default App;
