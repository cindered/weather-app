import React from 'react';
import Form from './Form.js';
import Weather from './Weather.js';
import {useSpring, animated} from 'react-spring';


export default function Interface(props) {
   //Spring animation to show form appearing smoothly on load.
   const interfaceAnimation = useSpring({
      opacity: 1, marginTop: 0, marginBottom: 0,
      from: {opacity: 0, marginTop: -50, marginBottom: 50}
    })

   //Animated div which then checks whether the requested data exists
   //if it does, display the correct div panel
   return(
      <animated.div style={interfaceAnimation}>
         <div className="interface">
            <Form 
               getWeather={props.getWeather}
               error={props.error}
            />
            {props.visible ? <Weather weatherData={props.weatherData} /> : null}
         </div>
      </animated.div>
   );
 }

