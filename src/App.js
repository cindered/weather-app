import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Interface from './components/Interface.js';
import Footer from './components/Footer.js'

//**********************************
// Check .env file, set API_KEY
// Designed for use with WeatherStack API. 
// Found at https://weatherstack.com
// Adjust URL as appropriate.
//**********************************

const API_KEY = process.env.REACT_APP_API_KEY;

export default class App extends Component {

  state = {
    weatherData: {
      city: undefined,
      country: undefined,
      temperature: undefined,
      realfeel: undefined,
      humidity: undefined,
      description: undefined,
    },
    visible: false,
    error: undefined,
  }

  getWeather = async (e) => {

    e.preventDefault()
    var city = e.target.elements.city.value;
    var country = e.target.elements.country.value;
    var url = 'http://api.weatherstack.com/current?access_key='+API_KEY+'&query='+city+','+country+'';


    this.setState({error: undefined});

    fetch(url, {
      method: 'GET',
    }).then(res => res.json())
    .then(response => {
      console.log('API Data:', response)
      if(response.success === false){
        this.setState({error: response.error})
      }
      else {
        this.setState({
          weatherData: {
            city: response.location.name,
            country: response.location.country,
            temperature: response.current.temperature,
            realfeel: response.current.feelslike,
            humidity: response.current.humidity,
            description: response.current.weather_descriptions[0],
          },
          visible: true,
        })
      }
    })
    .catch(error =>  {
      console.error('Error:', error)
      this.setState({ error: error })
    });
  }

  render(){
    return (
      <div className='app-container'>
        <Header />
        <Interface 
          getWeather={this.getWeather} 
          weatherData={this.state.weatherData}
          visible={this.state.visible}
          error={this.state.error}
        />
        <Footer />
      </div>
    );
  }
}

