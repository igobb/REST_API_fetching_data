import React, {useState,useEffect} from "react";
import "./CountriesWithEuro.css";

const CountriesWithEuro = ({ data }) => {
  const [countriesWithEuro,setCountriesWithEuro] = useState([]);

  useEffect(()=>{
    const euroCountries=data.filter((country) => {
      if(country.currencies){
        return Object.keys(country.currencies).includes("EUR");
      }
    });
    setCountriesWithEuro(euroCountries)
  },[])
    

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
