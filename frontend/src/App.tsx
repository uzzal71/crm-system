import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import Customers from "./pages/customer/customers";
import Dashboard from "./pages/dashboard";
import Leads from "./pages/leads/leads";
import Login from "./pages/Login";
import Marketing from "./pages/marketing/marketing";
import Products from "./pages/product/products";
import Profile from "./pages/profile";
import Reports from "./pages/reports/reports";
import Sales from "./pages/sale/sales";
import Settings from "./pages/settings";
import Supports from "./pages/support-ticket/supports";
import Tasks from "./pages/tasks/tasks";
import Todos from "./pages/todos/todos";
import Users from "./pages/users/users";
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
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/support-ticket" element={<Supports />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
