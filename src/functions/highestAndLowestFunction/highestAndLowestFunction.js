export const getKeysWithHighestAndLowestValue = (o, slice1, slice2) => {
    let keys = Object.keys(o);
    keys.sort(function (a, b) {
      return o[b] - o[a];
    });
    return keys.slice(slice1, slice2);
  }