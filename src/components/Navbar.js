import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Notes App</h1>
      <div className="links">
        <Link to="/">All Notes</Link>
        <Link to="/create">New Note</Link>
      </div>
    </nav>
  );
};

export default Navbar;
