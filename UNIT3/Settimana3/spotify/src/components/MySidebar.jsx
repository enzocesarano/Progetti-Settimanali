import { Navbar, Nav, Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { arraySearch, songSearch } from "../actions";
import { Link } from "react-router-dom";

function Sidebar() {

  const arrayPref = useSelector((store) => store.arrayPref.arrayPref);
  console.log(arrayPref)

  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(arraySearch(query));
    dispatch(songSearch(query.toUpperCase()))
    setQuery('')
  };

  return (
    <aside className="col col-2">
      <Navbar expand="md" className="fixed-left justify-content-between">
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <img
              src="/assets/logo/logo.png"
              alt="Spotify Logo"
              width="131"
              height="40"
            />
          </Navbar.Brand>
          <Nav className="flex-column">
            <Link 
              to="/"
              className="nav-link d-flex align-items-center text-secondary"
            >
              <i className="bi bi-house-door-fill"></i>&nbsp; Home
            </Link>

            <Nav.Link
              href="#"
              className="d-flex align-items-center text-secondary"
            >
              <i className="bi bi-book-fill"></i>&nbsp; Your Library
            </Nav.Link>

            <Form  onSubmit={handleSubmit} className="mb-4">
              <Form.Group className="mt-3 d-flex">
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  onChange={handleChange}
                  value={query}
                />
                <Button type="submit" variant="outline-secondary" size="sm">
                  GO
                </Button>
              </Form.Group>
            </Form>
            {arrayPref[0] && (<div>
              <Link to="/liked" className="nav-link text-light fs-6">Brani che ti piacciono <i className="bi bi-heart-fill text-danger"></i></Link>
            </div>)}
          </Nav>
        </Container>
        <div className="nav-btn">
          <Button className="signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="login-btn" type="button">
            Login
          </Button>
          <div className="d-flex justify-content-center text-secondary">
            <Nav.Link href="#" className="me-2">
              Cookie Policy
            </Nav.Link>{" "}
            |
            <Nav.Link href="#" className="ms-2">
              Privacy
            </Nav.Link>
          </div>
        </div>
      </Navbar>
    </aside>
  );
}

export default Sidebar;
