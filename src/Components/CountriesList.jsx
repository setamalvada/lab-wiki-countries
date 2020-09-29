import React from 'react';
// import CountryDetails from './CountryDetails';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div class="col-4">
      {props.countries.map((country) => (
        <ul>
          <li>
            <Link to={`/country/${country.cca3}`}>
              <i>{country.flag}</i>
              {country.name.common}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default CountriesList;
