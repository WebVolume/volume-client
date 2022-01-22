import { Outlet } from "react-router-dom";
import * as Common from "@components/Common";
import "./Main.scss";

function Main() {
  return (
    <div className="main-screen">
      <Common.TopNav />
      <Common.RightAside />
      <Outlet />
    </div>
  );
}

export default Main;
