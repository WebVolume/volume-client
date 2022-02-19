import { Outlet } from "react-router-dom";
import * as Common from "@components/Common";
import "./Main.scss";

function Main() {
  return (
    <div className="main-screen">
      <Common.TopNav />

      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
}

export default Main;
