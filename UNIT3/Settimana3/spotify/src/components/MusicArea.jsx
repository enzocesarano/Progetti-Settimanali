import { Col, Row } from "react-bootstrap";
import LinkTop from "./LinkTop";
import SingleMusic from "./SingleMusic";
import Player from "./Player";
import MusicSearch from "./MusicSearch";
import { useSelector } from "react-redux";

const MusicArea = () => {
  const searchSong = useSelector((state) => state.arraySearch.arraySearch);

  return (
    <Row className="px-5">
      <Col className="col-12 mb-5">
        <LinkTop />
      </Col>
      {searchSong.length > 0 && (
        <Col className="col-12 mb-5">
          <MusicSearch />
        </Col>
      )}
      <Col className="col-12 mb-5">
        <SingleMusic name="queen" category="Rock Classics" />
      </Col>
      <Col className="col-12 mb-5">
        <SingleMusic name="katyperry" category="Pop Culture" />
      </Col>
      <Col className="col-12 mb-big">
        <SingleMusic name="eminem" category="HipHop" />
      </Col>
      <Col>
        <Player />
      </Col>
    </Row>
  );
};

export default MusicArea;
