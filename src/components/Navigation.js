import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar expand="lg" className={styles.frame} >
      <Container id="nav-box">
        <Nav.Link>
          <Link to="/" className={styles.title}>
            Portfolio
          </Link>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.items}>
          <Nav>
            <Nav.Link>
              <Link to="/" className={styles.a}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Introduction" className={styles.a}>
                Introduction
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/History" className={styles.a}>
                History
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
