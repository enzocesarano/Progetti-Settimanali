import { useEffect, useState } from "react";
import OneCityStatic from "./OneCityStatic";
import { Col } from "react-bootstrap";

const CityStatic = () => {
  const [search] = useState(["Milano", "Roma", "Torino"]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    myFetchDay();
  }, [search]);

  const myFetchDay = async () => {
    try {
      const requests = search.map((city) =>
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e1f339447dd50fa48017f5ae33f3eb56&lang=it&units=metric`
        ).then((response) => response.json())
      );

      const results = await Promise.all(requests);
      setCities(results);
    } catch (err) {
      console.error("Error fetching data: ", err);
    }
  };

  return (
      cities.map((city, index) => (
          <OneCityStatic key={index} city={city} />
      ))
  );
};

export default CityStatic;
