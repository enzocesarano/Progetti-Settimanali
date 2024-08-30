const WeatherMap = () => {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <iframe
          title="OpenWeatherMap"
          src="https://openweathermap.org/weathermap?basemap=map&cities=false&layer=temperature&lat=30&lon=-20&zoom=3"
          style={{ border: 0, width: '100%', height: '100%' }}
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  export default WeatherMap;