import React, { useEffect, useState } from "react";
import "./App.css";
import CountryCard from "./CountryCard";
import Search from "./Search";

function App() {
  const [countriesAll, setCountriesAll] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountriesAll(data));
  }, []);

  const handleChange = (event) => {
    const filtered = countriesAll.filter((country) =>
      country.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setCountriesAll(filtered);
  };

  return (
    <div className="main-container">
      <Search handleChange={handleChange} />
      <div className="card-container">
        {countriesAll.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
