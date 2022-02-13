import "./Dashboard.scss";
import { MainSwiper, RightAside } from "@components/Dashboard";

function Dashboard() {
  return (
    <div className="dashboard-screen">
      <main className="dashboard-screen-container">
        <MainSwiper />
      </main>
      <RightAside />
    </div>
  );
}

export default Dashboard;
