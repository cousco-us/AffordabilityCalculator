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
  // let currentStartingPoint = 25;
  let currentStartingPoint = 0;
  let percentageFilled = 0;

  const calculateStrokeDashOffset = (fill) => {
    // console.log(typeof fill)
    const oldStartingPoint = currentStartingPoint;
    percentageFilled += fill;
    currentStartingPoint += 100 - percentageFilled;
    // currentStartingPoint += 150 - percentageFilled;
    // currentStartingPoint += percentageFilled;
    // currentStartingPoint += 100 - (percentageFilled / 100);
    // currentStartingPoint = fill * (1 - (percentageFilled/100));
    return String(oldStartingPoint);
  };

  const radius = 15.915494309189533;
  const circumference = 2 * Math.PI * radius;
  console.log(radius);
  console.log(Math.PI);
  console.log(circumference);
  console.log('=== === ===');

  donutData.forEach((obj) => {
    const newObj = obj;
    const moneyValue = state[obj.propName];
    // const strokeDashArray = percentageSplit(moneyValue, estimatedPayment);
    // const slicePercentage = ((moneyValue / estimatedPayment) * 100);
    const slicePercentage = moneyValue / estimatedPayment;
    const calculatedSDA = slicePercentage * circumference;
    console.log(slicePercentage);
    console.log(calculatedSDA);
    console.log('');
    newObj.strokeDasharray = calculatedSDA;
    newObj.strokeDashoffset = calculateStrokeDashOffset(calculatedSDA);
    newObj.moneyValue = moneyValue;
    newDonutData.push(newObj);
  });

  return newDonutData;
};

module.exports = {
  percentageSplit,
  relativeOffset,
  buildDonutData,
};
