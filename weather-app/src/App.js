import React from 'react';
import Nav from './components/Nav.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';

const API_KEY = "72252411f46e35933d6dc0f49e2762ca";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1),
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the required values."
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <div className="jumbotron">
            <Form getWeather={this.getWeather}/>
            <Weather 
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

