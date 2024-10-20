/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Country.css";
export default function Country({ country, handleVisitCountry, handleVisitFlags }) {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleClick = () => {
    setVisited(!visited);
  };

  //   const passWithParams = () =>{
  //     handleVisitCountry(country);

  //   }

  return (
    <div className={`country ${visited && "visited"}`}>
      {/* {console.log(country)} */}
      {/* {console.log(flags?.alt)}  */}

      <h3>
        {name?.common} {visited && "✈️"}
      </h3>
      <img src={flags.png} alt={flags.alt} />
      <p>Population: {population}</p>
      <p>Area: {area} km²</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitCountry(country)}>Mark Visited</button>
      <button onClick={() => handleVisitFlags(country.flags.png)}>Add Flag</button><br />
      <button onClick={handleClick}>{visited ? "Go Home" : "Visit"}</button>

      <p className={`msg ${visited && "visitedmsg"}`}>
        {visited ? "Visited" : "Not Visited"}
      </p>
    </div>
  );
}
