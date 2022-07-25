import './App.css';
import Cards from './components/Cards.jsx';
import Navbar from './components/Navbar.jsx';
import DigitalClock from './components/DigitalClock';
import axios from 'axios'
import { useState } from 'react';
import { Title, Frame } from './components/Styles';

function App() {
  let [cities, setCities] = useState([]) 
  const API_KEY = '5348c1f32968b89889de66792ec0dc56'

  function onSearch (city) {
    let response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`) 
      .then(response => response.data)
      .then(r => setCities([...cities, r]))
      .catch(r => ("City not found"))
  }

  function onFilter (city) {
    setCities(cities.filter(c => c.name.toLowerCase() !== city.toLowerCase()))
  }

  return (
    <div className="App">
      <Frame>
        <DigitalClock/>
        <Title>Weather App</Title>
        <Navbar onSearch={onSearch}/>
        <Cards cities={cities} onFilter={onFilter}/>
      </Frame>
    </div>
  );
}

export default App;
