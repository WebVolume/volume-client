import { Navigate, Outlet } from "react-router-dom";
import * as Common from "@components/Common";
import "./Main.scss";

function Main() {
  const isAuth = localStorage.getItem("isLoggedIn");
  return isAuth ? (
    <div className="main-screen">
      <Common.TopNav />

      <main className="main-container">
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/" />
  );
}

export default Main;
