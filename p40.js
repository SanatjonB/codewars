const findShort = (s) => {
  return s
    .split(" ")
    .reduce((short, curr) => (curr.length < short.length ? curr : acc)).length;
};
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
