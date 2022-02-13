import "./Dashboard.scss";
import {
  MainSwiper,
  RightAside,
  RecommendationList,
  PopularVolumerList
} from "@components/Dashboard";
import RecommendationPlaylist from "@components/Dashboard/RecommendationPlaylist";

function Dashboard() {
  return (
    <div className="dashboard-screen">
      <main className="dashboard-screen-container">
        <MainSwiper />
        {/* 추천 */}
        <RecommendationList />
        {/* 인기상승 volumer */}
        <PopularVolumerList />

        {/* 추천 플레이리스트 */}
        <RecommendationPlaylist />
      </main>
      <RightAside />
    </div>
  );
}

export default Dashboard;
