import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MySidebar from "./components/MySidebar";
import { Col, Container, Row } from "react-bootstrap";
import MusicArea from "./components/MusicArea";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorite from "./components/Favorite";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Container fluid className="vh-100">
        <Row>
          <Col className="col-2 p-0">
            <MySidebar />
          </Col>
          <Col>
          <Routes>
            <Route path="/" element={<MusicArea />} />
            <Route path="/liked" element={<Favorite />} />
          </Routes>
          </Col>
        </Row>
      </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
