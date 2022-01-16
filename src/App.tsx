import { Link } from "react-router-dom";
import RootRouter from "./navigation/RootRouter";
import "./assets/styles/reset.css";

function App() {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/search">search</Link>
      <Link to='/test'>testPage</Link>
      <RootRouter />
    </div>
  );
}

export default App;
