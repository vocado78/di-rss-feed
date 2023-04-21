const { parser } = require('../xml-parser');

const fetchRss = async(rssUrl) => {
  const res = await fetch(rssUrl, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
  const rss = await res.text();

  return parser.parse(rss);
};

const canSortByDate = (arr) => {
  if (arr && Array.isArray(arr)) {
    return arr.every(obj => !!obj.pubDate);
  }
  return false;
};

const sortRssByDateDesc = (data) => {
  const list = data?.rss?.channel?.item;

  if (canSortByDate(list)) {
    return list.sort((a, b) => {
      new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
    });
  } else {
    return list || [];
  }
}

const getNumRssItems = async(rssUrl, num) => {
  const rss = await fetchRss(rssUrl);
  const rssSortedByDate = sortRssByDateDesc(rss);
  return rssSortedByDate.slice(0, num);
}

module.exports = {
  getNumRssItems
};
