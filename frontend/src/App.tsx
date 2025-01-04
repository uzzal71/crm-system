import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateCampaign from "./pages/CreateCampaign";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
