import React from "react";

import { groupBy } from "../../../functions/groupByFunction/groupBy";
import { getKeysWithHighestAndLowestValue } from "../../../functions/highestAndLowestFunction/highestAndLowestFunction";
import { green, red } from "@mui/material/colors";

const AreaOfContinent = ({ data }) => {
  const groupByContinents = groupBy(data, "continents");
  let areaOfContinents = {};

  function sumArea(continent) {
    const choosenContinent = groupByContinents[continent];
    const areaOfEachCountry=choosenContinent.map((country) => {
      return country.area;
    });
    let areaOfContinent = areaOfEachCountry.reduce((a, b) => a + b, 0);
    areaOfContinents[continent] = areaOfContinent;
    return `Continent ${continent}: ${areaOfContinent
      .toString()
      .replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1,")} km²`;
  }

  const arrayOfContinents = Object.keys(groupByContinents);

  return (
    <div>
      {arrayOfContinents.map((continent, index) => {
        return <p key={index}>{sumArea(continent)}</p>;
      })}
      <p style={{ fontWeight: 700, color: green[200] }}>
        The largest continent by area:{" "}
        {getKeysWithHighestAndLowestValue(areaOfContinents, 0, 1)}
      </p>
      <p style={{ fontWeight: 700, color: red[200] }}>
        The smallest continent:{" "}
        {getKeysWithHighestAndLowestValue(areaOfContinents, -1)}
      </p>
    </div>
  );
};

export default AreaOfContinent;
