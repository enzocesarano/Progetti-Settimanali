import { useEffect, useState } from "react";
import SearchCity from "./SearchCity";
import { Col, Container, Row } from "react-bootstrap";
import City from "./City";
import Icon from "./Icon";
import Daily from "./Daily";
import CityStatic from "./CityStatic";
import WeatherMap from "./WeatherMap";
import 'leaflet/dist/leaflet.css';

const MeteoAera = () => {
  const [search, setSearch] = useState("napoli");
  const [city, setCity] = useState({});
  const [cityDaily, setCityDaily] = useState({});

  const changeCity = (newCity) => {
    setSearch(newCity);
  };

  useEffect(() => {
    myFetch();
    myFetchDay();
  }, [search]);

  const myFetch = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=e1f339447dd50fa48017f5ae33f3eb56&lang=it&units=metric`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("La chiamata non è andata a buon fine");
        }
      })

      .then((forecast) => {
        setCity(forecast);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const myFetchDay = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e1f339447dd50fa48017f5ae33f3eb56&lang=it&units=metric`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("La chiamata non è andata a buon fine");
        }
      })

      .then((daily) => {
        setCityDaily(daily);
        console.log(cityDaily);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-dark p-4">
      <Container fluid className="bg-black rounded-4 p-5">
        <Row className="align-items-center mb-4">
          <Col>{city.city && <City cityProp={city.city.name} />}</Col>
          <Col>
            <SearchCity changeCity={changeCity} />
          </Col>
          <Col>{cityDaily.name && <Icon iconProps={cityDaily} />}</Col>
        </Row>
        <Row>{city.city && <Daily cityProp={city} />}</Row>
        <Row>
          <Col className="col-12 col-lg-2 mb-4 mb-lg-0">
            <Row className="flex-column g-2">
              <CityStatic changeCity={(e) => changeCity(e)} />
            </Row>
          </Col>
          <Col className="col-12 col-lg-10 ps-5 pe-0">
            {cityDaily.coord && (
              <WeatherMap lat={cityDaily.coord.lat} lon={cityDaily.coord.lon}/>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MeteoAera;
