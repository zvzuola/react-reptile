const Router = require('koa-router');
const fetchUrl = require('../util/fetch_url');

let router = new Router();

function* index() {
    yield this.render('index');
}


router.get('/juejin/', index);

router.get('/api/juejin', function* juejin() {
    let url = 'https://juejin.im';
    let links = yield fetchUrl(url);
    console.log(links);
    this.body = links;
});

module.exports = router;