import { useState } from "react";
import { Col, Row } from "react-bootstrap";



const OneCityStatic = ({ city, onClick1}) => {
  const iconUrl = `http://openweathermap.org/img/w/${city.weather[0].icon}.png`;
  const temperature = city.main.feels_like.toFixed(1);


  return (
    <Col className="col-12 bg-dark text-light p-3 rounded-3 pointer" onClick={() => onClick1(city.name)}>
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
