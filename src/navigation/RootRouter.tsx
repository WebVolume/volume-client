import { Route, Routes } from "react-router-dom";
import * as Screens from "../screens";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Screens.Home />} />
      <Route path="main/*" element={<Screens.Main.Main />}>
        <Route index element={<Screens.Main.Dashboard />} />
        <Route path="search/:query" element={<Screens.Main.Search />} />
        <Route path="library" element={<Screens.Main.Library />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
