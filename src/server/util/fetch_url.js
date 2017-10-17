let request = require('request');
let cheerio = require('cheerio');
let path = require('path');

module.exports = (url) => {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err) reject(err);
      let $ = cheerio.load(body);
      let juejin = [];
      $('a.title').each(function () {
        juejin.push({
          title: $(this).text(),
          link: path.join(url, $(this).attr('href')),
        });
      });
      resolve(juejin);
    })
  })
}