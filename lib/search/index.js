const open = require("open");

const sites = {
  google: "https://www.google.com/search?q=",
  github: "https://github.com/search?q=",
  stackoverflow: "https://stackoverflow.com/search?q=",
  npm: "https://www.npmjs.com/search?q=",
};
const defaultKey = "google";

module.exports = function search(keyword, options) {
  const keys = Object.keys(options);
  const froms = keys.length > 0 ? keys : [defaultKey];
  froms.map((from) => {
    const searchUri = `${sites[from]}${keyword}`;
    open(searchUri);
  });
};
