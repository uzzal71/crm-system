import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import CampaignCreate from "./pages/campaign/campaign-create";
import CampaignList from "./pages/campaign/campaigns";
import Dashboard from "./pages/dashboard";
import Login from "./pages/Login";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import TodoList from "./pages/todo/todo-list";
import UserList from "./pages/users/user-list";
import RedirectIfAuthenticated from "./RedirectIfAuthenticated";
import RequireAuth from "./RequireAuth";

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
        <Route
          path="/"
          element={
            <RedirectIfAuthenticated>
              <Login />
            </RedirectIfAuthenticated>
          }
        />
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campaigns" element={<CampaignList />} />
          <Route path="/campaign-create" element={<CampaignCreate />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
