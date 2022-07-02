import { Link } from "react-router-dom";

export function NavigationPage() {
  return (
    <div>
      Navigation list Items below
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/navigation">Navigation</Link>
        </li>
        <li>
          <Link to="/error">Error</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
