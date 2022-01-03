import { Route, Routes } from "react-router-dom";
import * as Screens from "../screens";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Screens.Home />} />
      <Route path="/search" element={<Screens.Search />} />
    </Routes>
  );
};

export default RootRouter;
