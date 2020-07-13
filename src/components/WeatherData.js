import React from 'react';

export default function WeatherData(props) {
   return(
      <div className="weather-data">
         <p>{props.weatherData.city}</p>
         <p>{props.weatherData.country}</p>
         <p>{props.weatherData.temperature + " ℃"}</p>
         <p>{props.weatherData.realfeel + " ℃"}</p>
         <p>{props.weatherData.humidity + " %"}</p>
      </div>
   );
 }

