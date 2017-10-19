let request = require('request');
let cheerio = require('cheerio');
let URL = require('url');

module.exports = (item) => {
  let url = item.url;
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err) reject(err);
      let $ = cheerio.load(body);
      let myUrl = new URL.URL(url);
      let list = [];
      let selectors = getSelectors[item.type]($);
      selectors.each(function () {
        list.push({
          title: $(this).text(),
          link: new URL.URL($(this).attr('href'), myUrl.origin),
        });
      });
      resolve(list);
    })
  })
}

let getSelectors = {
  juejin($) {
    return $('a.title');
  },

  segmentfault($) {
    return $('.news__item-title>a');
  },

  toutiao($) {
    return $('.title>a');    
  }
}

