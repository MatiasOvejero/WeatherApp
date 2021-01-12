import { useState } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./styles/App.css";

function App() {
  const [weather, setWeather] = useState([]);
  const APIKEY = "08556e7069d24a375921151a0e39f8c1";

  async function fetchData(e) {
    console.log(e);
    e.target.preventDefault();
    const apiData = await fetchData(
      `api.openweathermap.org/data/2.5/weather?q=London&appid=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => data);
    setWeather({
      data: apiData,
    });
  }
  return (
    <div className="App">
      <h3>Weather App</h3>
      <Form getWeather={fetchData} />
      {console.log(weather.data)}
    </div>
  );
}

export default App;

//api.openweathermap.org/data/2.5/weather?q=London,uk&appid={APIKEY}
