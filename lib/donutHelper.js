const percentageSplit = (slice, total) => {
  const slicePercent = (slice / total) * 100;
  const remainder = 100 - slicePercent;
  return [slicePercent, remainder];
};

const relativeOffset = (slice, total) => (
  percentageSplit(slice, total)[0]
);

module.exports = {
  percentageSplit,
  relativeOffset,
};
