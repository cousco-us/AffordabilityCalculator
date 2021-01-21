const percentageSplit = (slice, total) => {
  const slicePercent = (slice / total) * 100;
  const remainder = 100 - slicePercent;
  return [slicePercent, remainder];
};

module.exports = {
  percentageSplit,
};
