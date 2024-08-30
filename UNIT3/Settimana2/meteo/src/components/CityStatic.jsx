import { useEffect, useState } from 'react';
import OneCityStatic from './OneCityStatic'

const CityStatic = () => {

  const [search, setSearch] = useState("napoli");

  useEffect(() => {
    myFetchDay();
  }, [search]);


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
        console.log(daily);
      })

      .catch((err) => {
        console.log(err);
      });
  };

    return (
        <OneCityStatic />
    )
}

export default CityStatic