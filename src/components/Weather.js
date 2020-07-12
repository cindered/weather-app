import React from 'react';

export default function Weather(props) {
   return(
      <div className="weather-container">
         <p>{"City :  " + props.weatherData.city}</p>
         <p>{"Country : " + props.weatherData.country}</p>
         <p>{"Temperature : " + props.weatherData.temperature + " ℃"}</p>
         <p>{"Real Feel : " + props.weatherData.realfeel + " ℃"}</p>
         <p>{"Humidity : " + props.weatherData.humidity + " %"}</p>
         <p>{props.weatherData.description}</p>
      </div>
   );
 }

