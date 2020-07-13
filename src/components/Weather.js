import React from 'react';
import WeatherWrapper from './WeatherWrapper.js';

export default function Weather(props) {


   return(
      <div className="weather-container">
         <WeatherWrapper weatherData={props.weatherData} />
         <p className="weather-description">{props.weatherData.description}</p>
      </div>
   );
 }

