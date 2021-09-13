import { Navbar, Nav, NavItem } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import "./style.scss";
const TopNavBar = () => {
  return (
    <Navbar expand="md" className="mb-4 mr-2 rounded">
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <Link to="/upload">Upload</Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default TopNavBar;
