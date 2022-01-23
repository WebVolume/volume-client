import { Link } from "react-router-dom";
import RootRouter from "./navigation/RootRouter";
import "./assets/styles/reset.css";
import "./assets/styles/font.css";

function App() {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/search">search</Link>
      <Link to="/profile">profile</Link>
      <RootRouter />
    </div>
  );
}

export default App;
