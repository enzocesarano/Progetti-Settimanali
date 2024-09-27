import { useEffect, useState } from "react";
import OneCityStatic from "./OneCityStatic";

const CityStatic = ( {changeCity} ) => {
  const [search] = useState(["Milano", "New York", "Londra"]);
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
      console.log(cities)

    } catch (err) {
      console.error("Error fetching data: ", err);
    }
  };

  return (
      cities.map((city, index) => (
          <OneCityStatic key={index} city={city} onClick1={(e) => changeCity(e)} />
      ))
  );
};

export default CityStatic;
