import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrentDateDisplay from "./CurrentDate.js";

export const WeatherViewer = ({ cityData }) => {
  const baseUrlSearch = process.env.REACT_APP_BASE_URL_SEARCH;
  const apiKey = process.env.REACT_APP_API_KEY;

  const [data, setData] = useState(null);
  const [iconSrc, setIconSrc] = useState("");

  // data cache
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data"));
    if (items) {
      setData(items);
    }
  }, []);

  // const [setLoading] = useState(false);

  useEffect(() => {
    setData(null);
    // setLoading(true);
    axios
      .get(`${baseUrlSearch}${cityData.Key}?apikey=${apiKey}`)
      .then((res) => {
        setData(res.data[0]);
        setIconSrc(`/icons/${res.data[0].WeatherIcon}.svg`);
        //console.log(res.data[0].WeatherIcon);
      });
  }, [cityData.Key]);

  return (
    <>
      {data && (
        <>
          <div />
          <div className="container-content-result">
            <div className="d-flex flex-between">
              <h2 className="weather-text">{data.WeatherText}</h2>
              <h3 className="temperature-value">
                {Math.ceil(data.Temperature.Metric.Value)}
                &deg;{data.Temperature.Metric.Unit}
              </h3>
            </div>
            <div className="d-flex flex-between city-icon-wrapper">
              <div>
                <CurrentDateDisplay />
                <h2 className="city-country">
                  {cityData.EnglishName}, {cityData.Country.EnglishName}
                </h2>
              </div>
              <div className="icon-box">
                <img className="icon" src={iconSrc} alt="weathericon" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
