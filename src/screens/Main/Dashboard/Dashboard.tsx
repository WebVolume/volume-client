import "./Dashboard.scss";
import {
  MainSwiper,
  RightAside,
  RecommendationList,
  PopularVolumerList
} from "@components/Dashboard";
import RecommendationPlaylist from "@components/Dashboard/RecommendationPlaylist";
import CategoryList from "@components/Dashboard/CategoryList";
import { v4 as uuidv4 } from "uuid";

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

        {/* 카테고리 */}
        {[1, 2, 3, 4].map(() => (
          <CategoryList key={uuidv4()} />
        ))}
      </main>
      <RightAside />
    </div>
  );
}

export default Dashboard;
