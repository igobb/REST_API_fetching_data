import React from "react";
import "./CountriesWithEuro.css";

const CountriesWithEuro = ({ data }) => {
  let countriesWithEuro = [];

  data &&
    data.map((country) => {
      country.currencies?.EUR && countriesWithEuro.push(country);
    });

  return (
    <div>
      <p className="modal-header">
        Countries with Euro currency: {countriesWithEuro.length} countires{" "}
      </p>
      {countriesWithEuro.map((country, index) => {
        return (
          <p className="countries-with-euro" key={country.name.official}>
            {index + 1} - {country.name.official}
          </p>
        );
      })}
    </div>
  );
};

export default CountriesWithEuro;
