import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
// You can also add a feature to allow users to view the country's official embassy or consulate website


const Countries = () => {
  const [contries, setContries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setContries(data));
  }, []);

  const handleVisitCountry = (country) => {
    if (!visitedCountries.includes(country)) {
      setVisitedCountries([...visitedCountries, country]);
    }
  };

  const handleVisitFlags = (flags) => {
    // console.log('Adding flags');
    
    if (!visitedFlags.includes(flags)) {
      setVisitedFlags([...visitedFlags, flags]);
    }
  }



  return (
    <div>
      {/* All info for Country */}
      <div className="country-info">
        <h3>Total Countries: {contries.length}</h3>
        <h3>Visited Countries: {visitedCountries.length}</h3>
        <h3>Unvisited Countries: {contries.length - visitedCountries.length}</h3>
      </div>
      {/* Visited Countries */}
      <div className="visited-country-container">
        <div className="visited-country-list">
          {visitedCountries.map((country) => (
            <p key={country.cca3}>{country.name.common}</p>
          ))}
        </div>

        {/* Visited Flags */}
        <div className="visited-country-list">
          {visitedFlags.map((flag, index) => (
            <img key={index} src={flag} />
          ))}
        </div>

        {/* <h4>Unvisited Countries: {contries.length - visitedCountries.length}</h4>
        {
            contries
             .filter((country) =>!visitedCountries.includes(country))
             .map((country) => (
                <p key={country.cca3}>{country.name.common}</p>
              ))
        } */}
      </div>

      {/* Display Countries */}
      <div className="contries-container">
        {contries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitCountry={handleVisitCountry}
            handleVisitFlags={handleVisitFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;