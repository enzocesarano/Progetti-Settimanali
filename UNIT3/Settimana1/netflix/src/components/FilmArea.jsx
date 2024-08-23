import { Component } from "react";
import MyGallery from "./MyGallery";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

class FilmArea extends Component {
  state = {
    gallery: ["avengers", "thor"],
    searchTerm: ""
  };

  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.searchTerm.trim() && !this.state.gallery.includes(this.state.searchTerm.trim())) {
      this.setState((prevState) => ({
        gallery: [...prevState.gallery, this.state.searchTerm.trim()],
        searchTerm: "" 
      }));
    }
  };

  render() {
    return (
      <Container fluid className="px-5">
        <Row xs={2} md={2} lg={6} className="mb-3">
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="d-flex align-items-center">
                <Form.Control
                  value={this.state.searchTerm}
                  onChange={this.handleInputChange}
                  className="bg-dark text-light input text-capitalize me-2"
                  placeholder="Cerca i tuoi film preferiti..."
                />
                <Button variant="outline-light" type="submit">Cerca</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        {this.state.gallery.map((film, i) => (
          <MyGallery key={i} gallery={film} />
        ))}
      </Container>
    );
  }
}

export default FilmArea;
