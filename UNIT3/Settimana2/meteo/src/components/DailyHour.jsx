import { Card } from "react-bootstrap";

const formatDateTime = (dateTimeStr) => {

  const date = new Date(dateTimeStr);
  const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  const dayName = days[date.getDay()];
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${dayName} ${hours}:${minutes}`;
};

const DailyHour = ({ cityProp }) => {
  const iconUrl = `http://openweathermap.org/img/w/${cityProp.weather[0].icon}.png`;
  const temperature = cityProp.main.feels_like.toFixed(1);

  return (
    <Card className="bg-dark d-inline-block me-3" style={{ width: "200px" }}>
      <Card.Body className="d-flex flex-wrap">
        <Card.Text className="text-secondary fs-6 align-self-center mb-0">
          {formatDateTime(cityProp.dt_txt)}
        </Card.Text>
        <div className="w-50">
          <Card.Img src={iconUrl} className="w-100" />
        </div>
        <Card.Title className="d-flex align-items-start text-secondary mb-0 align-self-center">
          <span className="fs-3 me-1 text-light">{temperature}</span>°C
        </Card.Title>

        <Card.Body className="d-flex justify-content-between p-0">
          <Card.Text className="text-light fs-5 align-self-center mb-0 d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-moisture"/>
            {cityProp.main.humidity}
          </Card.Text>

          <Card.Text className="text-light fs-5 align-self-center mb-0 d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-wind" />
            {cityProp.wind.speed}
          </Card.Text>

          <Card.Text className="text-light fs-5 align-self-center mb-0 d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-arrow-up" style={{ transform: `rotate(${cityProp.wind.deg}deg)` }} />
            {cityProp.wind.deg}°
          </Card.Text>

          <Card.Text className="text-light fs-5 align-self-center mb-0 d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-cloud"/>
            {cityProp.clouds.all}
          </Card.Text>
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

export default DailyHour;