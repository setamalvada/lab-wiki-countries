import React from 'react';
import './App.css';
import CountriesList from './Components/CountriesList';
import NavBar from './Components/NavBar';
import countries from './countries.json';
import { Route, Switch } from 'react-router-dom';
import CountryDetails from './Components/CountryDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="row">
        <CountriesList countries={countries} />
        <Switch>
          <Route exact path="/country/:id" component={CountryDetails} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
