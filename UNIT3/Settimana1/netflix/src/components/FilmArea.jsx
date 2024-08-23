import { Component } from "react";
import MyGallery from "./MyGallery";
import { Container } from "react-bootstrap";

class FilmArea extends Component {
  state = {
    gallery1: "avengers",
    gallery2: "thor",
    gallery3: "captain america",
    gallery4: "action"
  };

  render() {
    return (
      <Container fluid className="px-5">
        <MyGallery gallery={this.state.gallery1} />
        <MyGallery gallery={this.state.gallery2} />
        <MyGallery gallery={this.state.gallery3} />
        <MyGallery gallery={this.state.gallery4} />
      </Container>
    );
  }
}

export default FilmArea;
