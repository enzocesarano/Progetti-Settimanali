import { useState } from "react";
import { Col, Row } from "react-bootstrap";



const OneCityStatic = ({ city }) => {
  const iconUrl = `http://openweathermap.org/img/w/${city.weather[0].icon}.png`;
  const temperature = city.main.feels_like.toFixed(1);

  const [value, setValue] = useState('')

  return (
    <Col className="col-2 bg-dark text-light p-3 rounded-3 mb-2" value={value}>
      <Row>
        <Col className="col-6 d-flex flex-column justify-content-between">
          <h6>{city.sys.country}</h6>
          <h4>{city.name}</h4>
          <h6>{city.weather[0].main}</h6>
        </Col>
        <Col className="col-6">
          <div className="w-50">
            <img src={iconUrl} alt="weather" className="w-100" />
            <h4 className="mb-1 text-light">{temperature}°C</h4>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default OneCityStatic;
