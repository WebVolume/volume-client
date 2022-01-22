import { Route, Routes } from "react-router-dom";
import * as Screens from "../screens";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Screens.Home />} />

      <Route path="main/*" element={<Screens.Main.Main />}>
        <Route path="" element={<Screens.Main.Dashboard />} />
        <Route path="search" element={<Screens.Main.Search />} />
      </Route>
      <Route path="/test" element={<Screens.SignUpModal />} />
    </Routes>
  );
};

export default RootRouter;
