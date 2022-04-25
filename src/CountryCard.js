import React from "react";

function CountryCard(props) {
  return (
    <div className="country-card">
      <img src={props.country.flag} alt="country-flag" />
      <div className="country-info">
        <h3>{props.country.name}</h3>
        <p>
          <b>Population:</b>
          {props.country.population}
        </p>
        <p>
          <b>Region:</b>
          {props.country.region}
        </p>
        <p>
          <b>Capital:</b>
          {props.country.capital}
        </p>
      </div>
    </div>
  );
}
export default CountryCard;
