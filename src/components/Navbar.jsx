import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/watchlist">Watchlist</Link>
    </nav>
  );
}

export default Navbar;