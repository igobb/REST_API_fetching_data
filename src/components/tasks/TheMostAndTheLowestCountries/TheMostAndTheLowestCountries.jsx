import React from "react";
import { groupBy } from "../../../functions/groupByFunction/groupBy";
import { getKeysWithHighestAndLowestValue } from "../../../functions/highestAndLowestFunction/highestAndLowestFunction";

const TheMostAndTheLowestCountries = ({ data }) => {
  const groupByContinents = groupBy(data, "continents");
  const Continents = {};

  Object.keys(groupByContinents).forEach((continent) => {
    Continents[continent] = Object.keys(
      groupByContinents[continent]
    ).length;
  });

  return (
    <div>
      <p>
        The most countries have{" "}
        {getKeysWithHighestAndLowestValue(Continents, 0, 1)}
      </p>
      <p>
        {getKeysWithHighestAndLowestValue(Continents, -1)} has the fewest
        countries
      </p>
    </div>
  );
};

export default TheMostAndTheLowestCountries;
