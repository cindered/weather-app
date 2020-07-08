import React from 'react';

export default function FormInput(props) {
   return(
      <div className="form-input">
         <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="country" placeholder="Country..." />
            <button className="form-btn">find</button>
         </form>
      </div>
   );
 }

