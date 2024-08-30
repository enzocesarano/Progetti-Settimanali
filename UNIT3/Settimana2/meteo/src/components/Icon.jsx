
const Icon = ({iconProps}) => {

    const iconUrl = `http://openweathermap.org/img/w/${iconProps.weather[0].icon}.png`
    const temperature = iconProps.main.feels_like.toFixed(1);

    return(
        <div className="d-flex align-items-center justify-content-end">
            <img src={iconUrl} alt={iconProps.weather[0].description} className="me-2"/>
            <h4 className="mb-1 text-light">{temperature}°C</h4>
        </div>
    )
}

export default Icon 