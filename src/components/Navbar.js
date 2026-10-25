import { NavLink, useLocation } from "react-router-dom";
import { useData } from "../DataContext";
import { categories, getDropdown } from "../data/categories";
import "./Navbar.css";

export default function Navbar() {
  const data = useData();
  const { pathname } = useLocation();

  // no navbar on the landing page
  if (pathname === "/") return null;

  const goToCredits = (e) => {
    e.preventDefault();
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" end className="nav-link">
            {data.nav_home_label ?? "Home"}
          </NavLink>
        </li>

        {categories.map((c) => {
          const d = getDropdown(data, c.title);
          return (
            <li key={c.slug} className="nav-item">
              <NavLink to={`/${c.slug}`} className="nav-link">
                {d?.nav_label ?? c.title}
              </NavLink>
            </li>
          );
        })}

        <li className="nav-item">
        <NavLink to="/credits" className="nav-link">
            {data.nav_credits_label ?? "Credits"}
        </NavLink>
        </li>
      </ul>
    </nav>
  );
}