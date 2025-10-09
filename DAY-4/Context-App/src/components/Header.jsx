import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Add User</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users List</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
