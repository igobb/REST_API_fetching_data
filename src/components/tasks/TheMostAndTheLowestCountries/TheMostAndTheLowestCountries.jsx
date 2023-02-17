import React from "react";
import { groupBy } from "../../../functions/groupByFunction/groupBy";

const TheMostAndTheLowestCountries = ({ data }) => {
  const groupByContinents = groupBy(data, "continents");

  const Continents = {};

  Object.keys(groupByContinents).map((continent) => {
    return (Continents[continent] = Object.keys(
      groupByContinents[continent]
    ).length);
  });

  //Jak przypisać do nazwy kontynentu wartość z liczbą państw
  function getKeysWithHighestAndLowestValue(o, slice1, slice2) {
    let keys = Object.keys(o);
    keys.sort(function (a, b) {
      return o[b] - o[a];
    });
    return keys.slice(slice1, slice2);
  }

  // function getKeysWithLowestValue(o){
  //   let keys = Object.keys(o);
  //   keys.sort(function(a,b){
  //     return o[b] - o[a];
  //   })
  //   return keys.slice(-1);
  // }

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
