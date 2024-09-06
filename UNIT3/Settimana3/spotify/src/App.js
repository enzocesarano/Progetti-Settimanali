import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MySidebar from "./components/MySidebar";
import { Col, Container, Row } from "react-bootstrap";
import MusicArea from "./components/MusicArea";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Container fluid className="vh-100">
        <Row>
          <Col className="col-2 p-0">
            <MySidebar />
          </Col>
          <Col>
            <MusicArea />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
