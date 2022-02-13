import "./Dashboard.scss";
import {
  MainSwiper,
  RightAside,
  RecommendationList,
  PopularVolumerList
} from "@components/Dashboard";

function Dashboard() {
  return (
    <div className="dashboard-screen">
      <main className="dashboard-screen-container">
        <MainSwiper />
        {/* 추천 */}
        <RecommendationList />
        {/* 인기상승 volumer */}
        <PopularVolumerList />
      </main>
      <RightAside />
    </div>
  );
}

export default Dashboard;
