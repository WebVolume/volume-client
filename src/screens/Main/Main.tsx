import { Outlet } from "react-router-dom";
import TopNav from "../../components/Common/TopNav/TopNav";
import "./Main.scss";

function Main() {
  return (
    <div className="main-screen">
      <TopNav />
      <Outlet />
    </div>
  );
}

export default Main;
