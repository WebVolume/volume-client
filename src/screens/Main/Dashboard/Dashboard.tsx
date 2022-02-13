import "./Dashboard.scss";
import { MainSwiper, RightAside } from "@components/Dashboard";
import RecommendationList from "@components/Dashboard/RecommendationList";

function Dashboard() {
  return (
    <div className="dashboard-screen">
      <main className="dashboard-screen-container">
        <MainSwiper />
        <RecommendationList />
      </main>
      <RightAside />
    </div>
  );
}

export default Dashboard;
