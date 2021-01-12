import React, { useState } from "react";
import "./styles/App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
  const [weather, setWeather] = useState([]);
  const APIKEY = "08556e7069d24a375921151a0e39f8c1";

  async function fetchData(e) {
    const city = e.target.elements.city.value;
    const country = e.target.elements.city.value;
    e.preventDefault();
    const apiData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}}&APPID=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => data);
    if (city && country) {
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: apiData.main.temp,
        error: "",
      });
    } else {
      setWeather({
        data: " ",
        city: " ",
        country: " ",
        description: " ",
        temperature: " ",
        error: "Escribe el pais o la ciudad faltante por favor",
      });
    }
  }

  return (
    <div className="App">
      <h3>WEATHER APP</h3>
      <Form getWeather={fetchData} />
      <Weather
        city={weather.city}
        country={weather.country}
        description={weather.description}
        temperature={weather.temperature}
        error={weather.error}
      />
      {console.log(weather.data)}
    </div>
  );
}

export default App;

//api.openweathermap.org/data/2.5/weather?q=London,uk&appid={APIKEY}08556e7069d24a375921151a0e39f8c1
