import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clicked } from "../actions";
import LinkTop from "./LinkTop";
import Player from "./Player";

const Favorite = function () {
  const dispatch = useDispatch();
  const arrayPref = useSelector((state) => state.arrayPref.arrayPref);

  return (
    <Row className="px-5">
      <Col className="col-12 mb-5">
        <LinkTop />
      </Col>
      <Col className="col-12 text-light mb-3">
        <h2>Brani che ti piacciono <i className="bi bi-heart-fill text-danger"></i></h2>
      </Col>
      <Col className="col-12">
        <Row className="row-cols-6">
          {arrayPref.map((single, i) => (
            <Col
              key={i}
              className="text-center pointer"
              onClick={() => {
                dispatch(clicked(single));
              }}
            >
              <img
                className="img-fluid mb-2"
                src={single.album.cover_medium}
                alt="track"
              />
              <p className="fs-small fw-medium text-light px-3 mb-0">
                Track: {single.title}
              </p>
              <p className="fs-small text-light fw-medium">
                Artist: {single.artist.name}
              </p>
            </Col>
          ))}
        </Row>
      </Col>
      <Col>
        <Player />
      </Col>
    </Row>
  );
};

export default Favorite;
