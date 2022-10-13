import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About';
import Ciudad from '../components/Ciudad';

import { Route, Switch } from 'react-router-dom';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b&units=metric';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.find(c => c.id === parseInt(ciudadId));
    return ciudad;
  }
  
  return (
    <div className="App">
      <Nav onSearch={onSearch}/> {/* el NAV lo ponemos fuera del Switch para que siempre pueda verse.*/}
      
      <Switch>
        <Route exact path='/'> {/*se crea una route (ruta) y se le agrega un exact para que pueda mostras los demas componentes /ciudad o /about */}
          <Cards
          cities={cities}
          onClose={onClose}
          />
        </Route>
        <Route path="/about"> 
         <About />
        </Route>
        <Route  exact path='/ciudad/:id' 
           render={({match}) => <Ciudad city ={onFilter(match.params.id)}/>} >
            {/* es un path dinamico, '/ciudad' + ':id (la ciudad que le pasemos)*/}
        </Route>
      </Switch>
      <hr />
    </div>
  );
}

export default App;
