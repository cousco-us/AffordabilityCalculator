const donutData = require('./donutStarterData');

const percentageSplit = (slice, total) => {
  const slicePercent = (slice / total) * 100;
  const remainder = 100 - slicePercent;
  return [slicePercent, remainder];
};

const relativeOffset = (slice, total) => (
  percentageSplit(slice, total)[0]
);

const buildDonutData = (starterData, estimatedPayment, state) => {
  const newDonutData = [];
  const donutRadius = 15.915494309189533;
  const donutCircumference = (2 * Math.PI * donutRadius);
  let previousSDA = 0;
  let previousSDO = 0;

  donutData.forEach((obj) => {
    const newObj = obj;
    const moneyValue = state[obj.propName];
    const SDA = (moneyValue / estimatedPayment) * donutCircumference;
    const SDO = previousSDO + previousSDA;

    newObj.strokeDasharray = `${SDA} ${donutCircumference}`;
    newObj.strokeDashoffset = -SDO;
    newObj.moneyValue = moneyValue;
    newDonutData.push(newObj);

    previousSDA = SDA;
    previousSDO = SDO;
  });

  return newDonutData;
};

module.exports = {
  percentageSplit,
  relativeOffset,
  buildDonutData,
};
