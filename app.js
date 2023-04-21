const express = require('express');
const path = require('path');

const { attachRoutes } = require('./src/routes');

const initApp = () => {
  const app = express();
  const PORT = 3000; // Would go in a .env file.

  app.use(express.static(path.join(__dirname, './src/public')));

  attachRoutes(app);

  app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
  });
}

initApp();
