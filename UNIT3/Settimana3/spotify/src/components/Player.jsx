import { Col, Container, Nav, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToPref, removeFromPref } from "../actions";

const Player = () => {
  const songsClick = useSelector((state) => state.clicked.clicked);
  const arrayPref = useSelector((store) => store.arrayPref.arrayPref);

  const selected = arrayPref.map((element) => element.id).includes(songsClick.id);

  const dispatch = useDispatch();

  return (
    <Container fluid className=" fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col className="col-lg-10 offset-lg-2">
          <Row className="h-100 justify-content-center align-items-center">
            <Col className="col-2">
              {songsClick.album && (
                <div className="w-100 d-flex justify-content-between align-items-center">
                  <img
                    src={songsClick.album.cover}
                    className="w-25 object-fit-contain me-2"
                    alt={songsClick.album.title}
                  />
                  <div className="d-flex flex-column justify-content-center">
                    <p className="text-light fs-supersmall overflow-x-hidden mb-0">
                      {songsClick.title_short}
                    </p>
                    <p className="text-light fs-supersmall overflow-x-hidden mb-0">
                      {songsClick.artist.name}
                    </p>
                  </div>
                  <div>
                    <i
                      className={
                        selected
                          ? "bi bi-heart-fill text-danger pointer"
                          : "bi bi-heart text-light pointer"
                      }
                      onClick={() => {
                        if (!selected) {
                          dispatch(addToPref(songsClick));
                        } else {
                          dispatch(removeFromPref(songsClick));
                        }
                      }}
                    ></i>
                  </div>
                </div>
              )}
            </Col>
            <Col className="col-8 playerControls">
              <div className="d-flex">
                <Nav.Link href="#">
                  <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                </Nav.Link>
                <Nav.Link href="#">
                  <img src="assets/playerbuttons/prev.png" alt="prev" />
                </Nav.Link>
                <Nav.Link href="#">
                  <img src="assets/playerbuttons/play.png" alt="play" />
                </Nav.Link>
                <Nav.Link href="#">
                  <img src="assets/playerbuttons/next.png" alt="next" />
                </Nav.Link>
                <Nav.Link href="#">
                  <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                </Nav.Link>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
            <Col className="col-2"></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
