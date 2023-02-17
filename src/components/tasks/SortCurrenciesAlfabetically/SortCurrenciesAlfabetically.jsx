import { green, red } from "@mui/material/colors";
import React from "react";
import "./SortCurrenciesAlfabetically.css";

const SortCurrenciesAlfabeticaly = ({ data }) => {
  const currenciesArrayOfArrays = [];

  data &&
    data.map((country) => {
      country.currencies &&
        currenciesArrayOfArrays.push(Object.keys(country.currencies));
    });
  const currenciesArray = currenciesArrayOfArrays.flat(1);

  const uniqueCurrencies = [...new Set(currenciesArray)];

  return (
    <>
      <p className="modal-header">Currencies sorted alfabetically:</p>
      <div className="currencies__container">
        {uniqueCurrencies.sort().map((currency, index) => {
           let color = (index % 2) ? red[200] : green[200];
          return <span key={index} style={{color: color, marginLeft: '.2rem'}} >{index + 1} - {currency}</span>;
        })}
      </div>
    </>
  );
};

export default SortCurrenciesAlfabeticaly;
