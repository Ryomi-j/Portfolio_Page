import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Navigation() {
  const navItems = [
    { title: "Home", direction: "/" },
    { title: "Introduction", direction: "/Introduction" },
    { title: "History", direction: "/History" },
  ];

  return (
    <Navbar expand="lg" className={styles.frame}>
      <Container id="nav-box">
        <Nav.Link>
          <Link to="/" className={styles.title}>
            Portfolio
          </Link>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.items}>
          <Nav>
            {navItems.map((item, index) => (
              <Nav.Link key={index}>
                <Link to={item.direction} className={styles.a}>
                  {item.title}
                </Link>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
