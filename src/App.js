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
    console.log(countriesAll);
    const filtered = countriesAll.filter((country) =>
      country.name.toUpperCase().includes(event.target.value.toLowerCase())
    );
    console.log(event.target.value);
    setCountriesAll(filtered);
    console.log(filtered);
  };

  return (
    <div className="main-container">
      <Search handleChange={handleChange} />
      <div className="card-container">
        {countriesAll.map((country) => (
          <CountryCard country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
