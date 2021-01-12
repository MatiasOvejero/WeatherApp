import { useState } from "react";
import Form from "./Form";
import Weather from "./Weather";

function App() {
  const [weather, setWeather] = useState([]);
  const APIKEY = "08556e7069d24a375921151a0e39f8c1";

  async function fetchData(e) {
    e.preventDefault();
    const apiData = await fetchData(
      `api.openweathermap.org/data/2.5/weather?q={city name}&appid=${APIKEY}`
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
