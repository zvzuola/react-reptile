let request = require('request');
let cheerio = require('cheerio');
let URL = require('url');
const puppeteer = require('puppeteer');

const getJuejin = async () => {
  const url = 'https://juejin.im/welcome/frontend'
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let myUrl = new URL.URL(url);
  await page.goto(url);
  const textsArray = await page.evaluate(
    () => [...document.querySelectorAll('a.title')].map(elem => {
      return {
        title: elem.innerText,
        link: elem.getAttribute('href')
      }
    })
  );
  await browser.close();
  return textsArray.map(v => {
    v.link = new URL.URL(v.link, myUrl.origin)
    return v
  });
};


module.exports = (item) => {
  let url = item.url;
  if(url.indexOf('juejin') > -1) {
    return getJuejin()
  }
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

