export function getKeysWithHighestAndLowestValue(o, slice1, slice2) {
    let continentWithCountriesCounts = Object.entries(o);
    continentWithCountriesCounts.sort(function (a, b) {
      return b[1] - a[1];
    });

    return continentWithCountriesCounts.slice(slice1, slice2);
  }