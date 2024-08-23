import { Component } from "react";
import MyGallery from "./MyGallery";
import { Container, Form, Row, Col } from "react-bootstrap";

class FilmArea extends Component {
  state = {
    gallery: ["avengers", "thor", "american pie"],
    searchTerm: ""
  };


  render() {
    return (
      <Container fluid className="px-5">
        <Row xs={2} md={2} lg={6} className="mb-3">
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Control
                  onChange={(e) => {
                    this.setState({
                      searchTerm: e.target.value
                    });
                  }}
                  value={this.state.searchTerm}
                  className="bg-dark text-light input text-capitalize me-2"
                  placeholder="Cerca i tuoi film preferiti..."
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        {this.state.searchTerm.length > 3 && <MyGallery gallery={this.state.searchTerm} />}
        
        {this.state.gallery.map((film, i) => (
          <MyGallery key={i} gallery={film} />
        ))}
      </Container>
    );
  }
}

export default FilmArea;
