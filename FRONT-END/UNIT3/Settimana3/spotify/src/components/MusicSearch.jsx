
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { arraySearch, clicked } from "../actions";


const MusicSearch = function () {
  const dispatch = useDispatch();
  const searchSong = useSelector((state) => state.arraySearch.arraySearch)
  const searchName = useSelector((state) => state.search.search)

  return (
    <Row>
      <Col className="col-12 text-light mb-3">
        <h2>{searchName}</h2>
      </Col>
      <Col>
        <Row>
          {searchSong.slice(0, 4).map((single, i) => (
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

export default MusicSearch;