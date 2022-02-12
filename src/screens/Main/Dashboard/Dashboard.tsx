import "./Dashboard.scss";
import { MainSwiper } from "@components/Dashboard";
import * as Common from "@components/Common";

function Dashboard() {
  return (
    <div className="dashboard-screen">
      <MainSwiper />
      {/* <Common.RightAside /> */}
    </div>
  );
}

export default Dashboard;
