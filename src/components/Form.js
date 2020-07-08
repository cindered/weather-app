import React from 'react';
import FormInput from './FormInput.js'

export default function Form(props) {
   return(
      <div className="form-container">
         <FormInput getWeather={props.getWeather}/>
      </div>
   );
 }

