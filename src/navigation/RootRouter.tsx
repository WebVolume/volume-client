import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import * as Screens from "../screens";
import { useEffect } from "react";

const RootRouter = () => {
  const { Profile, Search, Library, Dashboard, Main } = Screens.Main;

  const navigate = useNavigate();
  const location = useLocation();

  /* 
    아무리 봐도 수정이 필요해보입니다 ㅠㅡㅠ 
    좋은 의견좀 부탁드릴게요...
  */
  useEffect(() => {
    console.log(localStorage.getItem("isLoggedIn"));
    if (localStorage.getItem("isLoggedIn") === null) {
      navigate("/");
    } else if (
      localStorage.getItem("isLoggedIn") &&
      location.pathname === "/"
    ) {
      navigate("/main");
    }
  }, [location.pathname, navigate]);

  return (
    <Routes>
      {/* 로그인 전 */}
      <Route path="/" element={<Screens.Home />} />

      {/* 로그인 이후 화면 */}
      <Route path="main/*" element={<Main />}>
        <Route index element={<Dashboard />} />
        <Route path="search/:query" element={<Search />} />
        <Route path="library" element={<Library />} />
        <Route path="profile/*" element={<Profile.Profile />}>
          <Route index element={<Profile.All />} />
          <Route path="likes" element={<Profile.Likes />} />
          <Route path="tracks" element={<Profile.Tracks />} />
          <Route path="playlists" element={<Profile.PlayLists />} />
          <Route path="reposts" element={<Profile.Reposts />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RootRouter;
