<h1 align="center">
   Weather App
</h1>
<p align="center">
   A responsive webapp that retrieves weather data from the WeatherStack API.
   <br>
</p>

### Made using: 
- React.js
   - React Spring


![demo](https://raw.githubusercontent.com/cindered/weather-app/master/src/images/weather-app-ui.png)

## Installation / Set up
1. Fork / Download directory
   
2. Then navigate to directory `.../weather-app`

3. Install node packages via package.json

   ```sh
   npm install
   ```  
   ```sh
   yarn
   ```
4. Start the server

   ```sh
   npm start
   ```
   or
   
   ```sh
   yarn start
   ```
   
5. Set up API_KEY

   1. First, get an API key from [WeatherStack](https://www.weatherstack.com).
   2. Enter API key into `.env-template` file.
   3. Follow commented instructions for setting appropriate `.env`.

### Currently, the code is based off of a free product plan from WeatherStack.
#### Feel free to change this API to a different provider / updated version. 
##### To do this, change the following URL code to the appropriate API endpoint:

```javascript
var url = 'http://api.weatherstack.com/current?access_key='+API_KEY+'&query='+city+','+country+'';
```

   
## License
[MIT](https://github.com/cindered/weather-app/blob/master/LICENSE)
