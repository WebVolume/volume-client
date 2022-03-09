import { Route, Routes } from "react-router-dom";
import * as Screens from "../screens";

const RootRouter = () => {
  const { Profile, Search, Library, Dashboard, Main } = Screens.Main;

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
