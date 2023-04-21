const path = require('path');

const getHomeView = (req, res) => {
  res.sendFile(path.join(__dirname + '../../index.html'));
}

module.exports = {
  getHomeView
};
