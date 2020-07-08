import React from 'react';
import Form from './Form.js';
import Weather from './Weather.js';

export default function Interface(props) {
   console.log(props.weatherData)
   return(
      <div className="interface">
         <Form getWeather={props.getWeather} />
         {props.visible ? <Weather weatherData={props.weatherData} /> : null}
      </div>
   );
 }

