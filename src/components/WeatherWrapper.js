import React from 'react';
import WeatherTitles from './WeatherTitles.js';
import WeatherData from './WeatherData.js';

export default function WeatherWrapper(props) {
   return(
      <div className="weather-wrapper">
         <WeatherTitles />
         <WeatherData weatherData={props.weatherData} />
      </div>
   );
 }