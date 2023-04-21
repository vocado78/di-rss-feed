const { getHomeView } = require('./controllers/home-view');
const { getRss } = require('./controllers/rss');

const attachRoutes = (app) => {
  app.get('/', getHomeView);
  app.get('/rss', getRss);
  app.get('*', getHomeView);
};

module.exports = {
  attachRoutes
};
