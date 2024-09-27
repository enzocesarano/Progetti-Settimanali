import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class MyFilm extends Component {
  state = {
    film: {
      Poster: this.props.img,
      Title: this.props.title,
      Year: this.props.age,
      imdbID: this.props.id,
    },
  };


  render() {
    return (
      <Col className="mb-3 mb-lg-0">
        <Card className="myCard bg-dark border-0 position-relative pointerSlide" id={this.state.film.imdbID}>
          <Card.Img
            src={this.state.film.Poster}
            className="h-100 object-fit-cover object-position-bottom cardImg"
          />
          <Card.Body className="position-absolute bottom-0 w-100 myText d-flex flex-column justify-content-end opacity-0 rounded-2">
            <Card.Title className="mb-0">{this.state.film.Title}</Card.Title>
            <Card.Text className="fs-6 text-light">{this.state.film.Year}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default MyFilm;
