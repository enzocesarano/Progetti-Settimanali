import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  NavLink,
} from "react-bootstrap";

class MyNav extends Component {
  render() {
    return (
      <header className="mb-3">
        <Navbar bg="dark" variant="dark" expand="lg" className="px-5">
          <Container fluid className="bg-dark px-0 py-2">
            <Navbar.Brand href="#" className="me-3 logo">
              <img
                className="w-100"
                src="/img/netflix_logo.png"
                alt="logo NETFLIX"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNavDropdown" />
            <Navbar.Collapse
              id="navbarNavDropdown"
              className="justify-content-between"
            >
              <Nav>
                <Nav.Link href="#" className="me-3 active">
                  Home
                </Nav.Link>
                <Nav.Link href="#" className="me-3">
                  TV Shows
                </Nav.Link>
                <Nav.Link href="#" className="me-3">
                  Movies
                </Nav.Link>
                <Nav.Link href="#" className="me-3">
                  Recently Added
                </Nav.Link>
                <Nav.Link href="#">My List</Nav.Link>
              </Nav>
              <div className="d-flex align-items-center justify-content-lg-end position-relative">
                <NavLink href="#">
                  <i className="bi bi-search text-light fs-4 me-3"></i>
                </NavLink>
                <Nav.Link href="#" className="me-3 active text-light">
                  KIDS
                </Nav.Link>
                <Nav.Link href="#">
                  <i className="bi bi-bell-fill text-light fs-4 me-3"></i>
                </Nav.Link>
                <NavDropdown
                  title={
                    <img
                      src="/img/avatar.png"
                      alt="Avatar account"
                      className="w-100"
                    />
                  }
                  id="basic-nav-dropdown"
                  align="end"
                  className="w-15 d-flex align-items-center iconaProfile"
                >
                  <NavDropdown.Item href="#">Edit Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#">Help Center</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Signout</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default MyNav;
