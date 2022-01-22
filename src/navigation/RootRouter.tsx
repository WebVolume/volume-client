import { Route, Routes } from "react-router-dom";
import * as Screens from "../screens";
import Dashboard from "../screens/Main/Dashboard";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Screens.Home />} />

      <Route path="/main/*" element={<Screens.Main />}>
        <Route path="" element={<Dashboard />} />
      </Route>
      <Route path="/search" element={<Screens.Search />} />
      <Route path="/test" element={<Screens.SignUpModal />} />
    </Routes>
  );
};

export default RootRouter;
