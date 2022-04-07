import React from "react";

function CountryCard({ country }) {
  console.log(country.flag);
  return (
    <div className="country-card">
      <img src={country.flags.svg} alt="country-flag" />
      <h3>{country.name}</h3>
      <p><b>Population:</b>{country.population}</p>
      <p><b>Region:</b>{country.region}</p>
      <p><b>Capital:</b>{country.capital}</p>
    </div>
  );
}

export default CountryCard;
