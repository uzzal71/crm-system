import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import CreateCampaign from "./pages/CreateCampaign";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const App = () => {
  const ref = useRef<LoadingBarRef>(null);
  const location = useLocation();

  useEffect(() => {
    ref.current?.continuousStart();
    const timeout = setTimeout(() => {
      ref.current?.complete();
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [location]);

  return (
    <>
      <LoadingBar color="#f11946" ref={ref} shadow={true} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
