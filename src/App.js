import "./assets/style/main.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { WeatherViewer } from "./components/WeatherViewer.js";
import { WeatherHeadline } from "./components/WeatherHeadline.js";
import logo from "./assets/img/weather-wise-logo.svg";
import houseImage from "./assets/img/Hero-img-house.png";

function App() {
  const baseUrlKey = process.env.REACT_APP_BASE_URL_KEY;
  const apiKey = process.env.REACT_APP_API_KEY;

  // states
  const [citySearch, setCitySearch] = useState([]);
  const [cityData, setCityData] = useState(null);

  // cityData cache
  useEffect(() => {
    localStorage.setItem("cityData", JSON.stringify(cityData));
  }, [cityData]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cityData"));
    if (items) {
      setCitySearch(items);
    }
  }, []);

  // city search form
  const fetchCity = (e) => {
    e.preventDefault();
    axios
      .get(`${baseUrlKey}?apikey=${apiKey}&q=${citySearch}`)
      .then((res) => {
        setCityData(res.data[0]);
        setCitySearch("");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <main>
      <nav className="nav">
        <img src={logo} alt="WeatherWise Logo" />
      </nav>
      <div className="container">
        <div className="container-img">
          <img src={houseImage} alt="Illustration of a house" />
        </div>

        <div className="container-content">
          <WeatherHeadline />

          <div role="search">
            <form
              className="form-group custom-form"
              autoComplete="off"
              onSubmit={fetchCity}
            >
              <label htmlFor="searchInput" className="form-label">
                Discover the weather in your city.
              </label>
              <div className="form-control">
                <input
                  className="search-input"
                  required
                  placeholder="Enter city name..."
                  value={citySearch}
                  onChange={(e) => setCitySearch(e.target.value)}
                  id="searchInput"
                  type="text"
                />
                <button type="submit" className="button">
                  Search
                </button>
              </div>
            </form>
          </div>

          {cityData && <WeatherViewer cityData={cityData} />}
        </div>
      </div>
    </main>
  );
}

export default App;
