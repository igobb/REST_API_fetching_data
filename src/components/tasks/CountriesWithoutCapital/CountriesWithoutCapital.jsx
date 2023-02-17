import React from "react";

const CountriesWithoutCapital = ({ data }) => {
  let countriesWithoutCapitals = [];

  data &&
    data.map((country) => {
      !country.capital && countriesWithoutCapitals.push(country);
    });

  return (
    <div>
      <p className="modal-header">Countries without capital:</p>
      {countriesWithoutCapitals.map((country) => {
        return <p key={country.name.official}>{country.name.official}</p>;
      })}
    </div>
  );
};

export default CountriesWithoutCapital;
