import { Col, Row } from "react-bootstrap";

const OneCityStatic = () => {
  return (
    <Col className="col-2 bg-dark text-light p-4 rounded-3">
      <Row>
        <Col className="col-6">
          <Row className="flex-column">
            <Col>IT</Col>
            <Col>Napoli</Col>
            <Col>Clouds</Col>
          </Row>
          <Row>
            <Col>img</Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default OneCityStatic;
