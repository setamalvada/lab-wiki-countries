import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const findCountry = countries.find(
    (country) => country.cca3 === props.match.params.id
  );
  return (
    <div class="col-7">
      <h1>{findCountry.name.common}</h1>

      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{findCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {findCountry.area} Km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {findCountry.borders.map((i) => {
                  const link = countries.find((c) => c.cca3 === i);
                  return (
                    <li key={i}>
                      <Link to={`/country/${link.cca3}`}>
                        {link.name.common}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
