import { Component } from "react";
import MyFilm from "./MyFilm";
import { Alert, Col, Row } from "react-bootstrap";
import CardLoading from "./CardLoading";

class MyGallery extends Component {
  state = {
    filmsArray: [],
    loading: true,
    error: false,
  };

  componentDidMount = () => {
    this.myFetch();
  };

  componentDidUpdate = (prevProps) => {
    if(prevProps.gallery !== this.props.gallery) {
      this.myFetch()
    }
  }

  myFetch = () => {
    fetch(`https://www.omdbapi.com/?apikey=e24d604e&s=${this.props.gallery}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("La chiamata non è andata a buon fine");
        }
      })

      .then((arrayFilm) => {
        const films = arrayFilm.Search ? arrayFilm.Search.slice(0, 6) : []
        this.setState(
          {
            ...this.state,
            filmsArray: films,
            loading: false,
          },
          () => {
            console.log(this.state);
          }
        );
      })

      .catch((err) => {
        console.log(err);
        this.setState({
          loading: false,
          error: true,
        });
      });
  };

  render() {
    return (
      <Row className="pb-5 border border-0 border-bottom border-1 border-secondary mb-4">
        <Col xs={12}>
          <h2 className="text-light mb-3 text-capitalize">{this.props.gallery}</h2>
        </Col>
        <Col>
          <Row xs={2} md={4} lg={6}>
            {this.state.loading && (
              <>
                <CardLoading />
                <CardLoading />
                <CardLoading />
                <CardLoading />
                <CardLoading />
                <CardLoading />
              </>
            )}

            {this.state.error && (
              <Alert className="bg-dark border-secondary">
                <span className="me-2 text-light">Qualcosa è andato storto...</span>
                <i className="bi bi-exclamation-triangle-fill text-danger"></i>
              </Alert>
            )}


            {this.state.filmsArray.map((film) => {
              return (
                <MyFilm
                  key={film.imdbID}
                  img={film.Poster}
                  title={film.Title}
                  age={film.Year}
                  id={film.imdbID}
                />
              );
            })}
          </Row>
        </Col>
      </Row>
    );
  }
}

export default MyGallery;
