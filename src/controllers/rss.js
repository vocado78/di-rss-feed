const { getNumRssItems } = require('../services/rss-service');

// Constants would go into a config/constants file.
const NUM_ITEMS = 10;
const RSS_URL = 'https://www.di.se/rss';

const getRss = async(req, res, next) => {
  try {
    const items = await getNumRssItems(RSS_URL, NUM_ITEMS);
    res.send(items);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getRss
};
