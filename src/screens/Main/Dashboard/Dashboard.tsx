import "./Dashboard.scss";
import { MainSwiper } from "@components/Dashboard";
import * as Common from "@components/Common";

function Dashboard() {
  return (
    <div className="dashboard-screen flex justify-space-between">
      <main>
        <MainSwiper />
      </main>
      <Common.RightAside />
    </div>
  );
}

export default Dashboard;
