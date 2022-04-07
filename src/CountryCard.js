import React from "react";

function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img src={country.flag} alt="country-flag" />
      <div className="country-info"><h3>{country.name}</h3>
      <p><b>Population:</b>{country.population}</p>
      <p><b>Region:</b>{country.region}</p>
      <p><b>Capital:</b>{country.capital}</p></div>
    </div>
  );
}

export default CountryCard;
