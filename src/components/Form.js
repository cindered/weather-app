import React from 'react';
import FormInput from './FormInput.js';
import Error from './Error.js';

//Form Component, if error exists then show error component
export default function Form(props) {
   return(
      <div className="form-container">
         {props.error ? <Error /> : null}
         <FormInput getWeather={props.getWeather}/>
      </div>
   );
 }

