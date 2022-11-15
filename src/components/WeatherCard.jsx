import React from "react";
import forecasts from "../__mocks__/api/forecasts";
import "./style.css";

// AccuWeather icons documentation: https://developer.accuweather.com/weather-icons
const getIcon = (icon) =>
  `https://developer.accuweather.com/sites/default/files/${icon}-s.png`;

// TODO: Implement weather card based on the design from the screenshot in the instructions.
export const WeatherCard = ({ day }) => (
  <div className="weather_card city" data-testid="weather_card">
    {/* Implement under this line ⬇️ */}
    <h2>{new Date(day.Date).toDateString()}</h2>
    <h3>{day.Day.IconPhrase}</h3>
    <div className="weather_temp">
        <div>
      Temperatures:
      <div>min. {day.Temperature.Minimum.Value} C</div>  
       <div>max. {day.Temperature.Maximum.Value} C</div> 
      </div>
      {getIcon(day.Day.Icon) ? (
        <img src={getIcon(day.Day.Icon)} alt="icon" />
      ) : (
        "no image"
      )}
    </div>

    {/* <h2>
  {day.date}
 </h2>
 <div> {day.Temperature.Minimum.value}</div> */}
  </div>
);
