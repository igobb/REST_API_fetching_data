import React from "react";

import { groupBy } from "../../../functions/groupByFunction/groupBy";
import { getKeysWithHighestAndLowestValue } from '../../../functions/highestAndLowestFunction/highestAndLowestFunction'
import { green, red } from "@mui/material/colors";

const PopulationOnContinent = ({ data }) => {
  const groupByContinents = groupBy(data, "continents");
  let populationOfContinents = {};

  function sumPopulation(continent) {
    let allPopulationOfEachCountry = [];
    const choosenContinent = groupByContinents[continent];
    choosenContinent.map((country) => {
      allPopulationOfEachCountry.push(country.population);
    });
    let allPopulationOfContinent = allPopulationOfEachCountry.reduce(
      (a, b) => a + b,
      0
    );
    populationOfContinents[continent] = allPopulationOfContinent;
    return `Continent ${continent}: ${allPopulationOfContinent
      .toString()
      .replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1,")} population`;
  }

  const arrayOfContinents = Object.keys(groupByContinents);

  return (
    <div>
      {arrayOfContinents.map((continent, index) => {
        return <p key={index}>{sumPopulation(continent)}</p>;
      })}
      {/* Kontynent z największą i najmniejszą populacją */}
      <p style={{ fontWeight: 700, color: green[200] }}>
        Continent with the largest population:{" "}
        {getKeysWithHighestAndLowestValue(populationOfContinents, 0, 1)}
      </p>
      <p style={{ fontWeight: 700, color: red[200] }}>
        Continent with the smallest population:{" "}
        {getKeysWithHighestAndLowestValue(populationOfContinents, -1)}
      </p>
    </div>
  );
};

export default PopulationOnContinent;
