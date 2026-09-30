import { Outlet, NavLink } from 'react-router';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand className="ms-3">Alexander Yu</Navbar.Brand>
        <Nav className="ms-auto me-3">
          <Nav.Link as={NavLink} to="/">Introduction</Nav.Link>
          <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
          <Nav.Link as={NavLink} to="/experience">Experience</Nav.Link>
          <Nav.Link as={NavLink} to="/repositories">Repositories</Nav.Link>
          <Nav.Link
            href="https://docs.google.com/document/d/1w5USgOV1Dn_Ee3bJAoTdb9m0wxQqy3GTsN1r6CGnpJw/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar>

      <main className="container flex-grow-1 py-4">
        <Outlet />
      </main>

      <footer className="navbar navbar-expand-sm navbar-dark bg-dark text-white py-3 px-3 d-flex justify-content-between align-items-center">
        <h2 className="mb-0">Contact and Links</h2>
        <ul className="navbar-nav flex-row">
          <li className="nav-item nav-link">(925)-750-0916</li>
          <li className="nav-item">
            <a className="nav-link" href="mailto:alexyu299@hotmail.com">
              alexyu299@hotmail.com
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com/AcedYu"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/alex-yu-3712811b9/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}