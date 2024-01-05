import "../assets/style/main.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const WeatherHeadline = () => {
  const baseUrlSearch = process.env.REACT_APP_BASE_URL_SEARCH;
  const apiKey = process.env.REACT_APP_API_KEY;

  const [headlineData, setHeadlineData] = useState(null);
  // const [setLoading] = useState(false);

  // data cache
  useEffect(() => {
    localStorage.setItem("headlineData", JSON.stringify(headlineData));
  }, [headlineData]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("headlineData"));
    if (items) {
      setHeadlineData(items);
    }
  }, []);

  useEffect(() => {
    setHeadlineData(null);
    // setLoading(true);
    axios.get(`${baseUrlSearch}${"226396"}?apikey=${apiKey}`).then((res) => {
      setHeadlineData(res.data[0]);
      // setLoading(false);
    });
  }, []);

  return (
    <>
      {headlineData && (
        <header>
          <p className="container-content-p">
            WEATHER WISE | Powered by AccuWeather API
          </p>
          <h1 className="container-content-h1">
            It’s Currently
            <span className="container-content-span-temp">
              {Math.ceil(headlineData.Temperature.Metric.Value)}
              &deg;{headlineData.Temperature.Metric.Unit}
            </span>
            in
            <span className="container-content-span">Tokyo, Japan</span>
            <span className="container-content-span-dot">.</span>
          </h1>
        </header>
      )}
    </>
  );
};
