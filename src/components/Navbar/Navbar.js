import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <header className="notesHeader">
      <Link to="/" className="brand">
        <h1>React Firestore</h1>
      </Link>
      <ul>
        <li>
          <Link to="/new">New </Link>
        </li>
      </ul>
    </header>
  );
}
