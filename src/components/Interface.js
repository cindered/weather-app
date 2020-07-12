import React from 'react';
import Form from './Form.js';
import Weather from './Weather.js';

export default function Interface(props) {
   return(
      <div className="interface">
         <Form 
            getWeather={props.getWeather}
            error={props.error}
         />
         {props.visible ? <Weather weatherData={props.weatherData} /> : null}
      </div>
   );
 }

