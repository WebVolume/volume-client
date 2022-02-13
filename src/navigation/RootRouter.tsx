import { Route, Routes } from "react-router-dom";
import * as Screens from "../screens";
// import * as Components from "../components";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Screens.Home />} />
      <Route path="main/*" element={<Screens.Main.Main />}>
        <Route index element={<Screens.Main.Dashboard />} />
        <Route path="search/:query" element={<Screens.Main.Search />} />
        <Route path="library" element={<Screens.Main.Library />} />

        <Route path="profile/*" element={<Screens.Profile.Profile />}>
          <Route index element={<Screens.Profile.All />} />
          <Route path="likes" element={<Screens.Profile.Likes />} />
          <Route path="tracks" element={<Screens.Profile.Tracks />} />
          <Route path="playlists" element={<Screens.Profile.PlayLists />} />
          <Route path="reposts" element={<Screens.Profile.Reposts />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RootRouter;
