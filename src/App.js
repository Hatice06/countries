import React, { useState } from "react";
import "./App.css";
import CountryCard from "./CountryCard";

function App() {
  const [countriesAll, setCountriesAll] = useState([]);

  fetch("https://restcountries.com/v2/all")
    .then((response) => response.json())
    .then((data) => setCountriesAll(data));

  return (
    <div className="container">
      {countriesAll.map((country) => (
        <CountryCard country={country} />
      ))}
    </div>
  );
}

export default App;
