import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const handler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.main) {
          const kelvin = data.main.temp;
          const celcius = kelvin - 273.15;
          setResult(`Temperature at ${city}: ${Math.round(celcius)}°C`);
        } else {
          setResult("City not found. Please try again.");
        }
        setCity("");
      });
  };

  return (
    <center>
      <div className="container">
      <div className="weather-card">
        <h2 className="title">React Weather App</h2>
        <form onSubmit={submitHandler} className="form">
          <input
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={handler}
            className="input"
          />
          <button type="submit" className="button">
            Get Temperature
          </button>
        </form>
        <h3 className="result">{result}</h3>
      </div>
    </div>
    </center>
  );
};

export default App;