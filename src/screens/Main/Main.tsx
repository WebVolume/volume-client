import { Navigate, Outlet } from "react-router-dom";
import * as Common from "@components/Common";
import "./Main.scss";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";

function Main() {
  const userInfo = useSelector(({ auth }: RootState) => auth.userInfo);

  return userInfo ? (
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
