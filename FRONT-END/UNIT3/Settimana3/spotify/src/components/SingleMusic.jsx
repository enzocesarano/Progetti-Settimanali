import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clicked, getSong } from "../actions";
import { Col, Row } from "react-bootstrap";

const SingleMusic = function ({ name, category }) {
  const dispatch = useDispatch();
  const songsArray = useSelector((state) => state[name][name])
  

  useEffect(() => {
    dispatch(getSong(name, name));
  }, [name]);


  return (
    <Row>
      <Col className="col-12 text-light mb-3">
        <h2>{category}</h2>
      </Col>
      <Col>
        <Row>
          {songsArray.slice(0,4).map((single, i) => (
            <Col key={i} className="text-center pointer" onClick={() => {
                dispatch(clicked(single))
              }}>
              <img className="img-fluid mb-2" src={single.album.cover_medium} alt="track" />
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
    </Row>
  );
};

export default SingleMusic;