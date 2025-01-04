import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateCampaign from "./pages/CreateCampaign";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
      </Routes>
    </>
  );
}

export default App;
