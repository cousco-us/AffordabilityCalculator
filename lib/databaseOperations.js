const Axios = require('axios');

const getRandomHome = async () => {
  let randomHome;
  await Axios.get('/houses')
    .then((homes) => {
      randomHome = homes.data[Math.floor(Math.random() * homes.data.length)];
    })
    .catch((err) => console.log(err));
  return randomHome;
};

const dbOps = {
  getRandomHome,
};

export default dbOps;
