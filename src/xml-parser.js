const { XMLParser } = require('fast-xml-parser');

const parser = new XMLParser({
  ignoreAttributes: false,
  allowBooleanAttributes: true
});

module.exports = {
  parser
};
