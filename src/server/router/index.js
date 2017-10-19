const Router = require('koa-router');
const fetchUrl = require('../util/fetch_url');

let router = new Router();

const baseUrls = [{
    url: 'https://juejin.im',
    type: 'juejin'
}, {
    url: 'https://segmentfault.com/news',
    type: 'segmentfault'
}, {
    url: 'https://toutiao.io',
    type: 'toutiao'
}]

router.get(/^(?!\/api\/)/, async (ctx) => {
    await ctx.render('index');
});

baseUrls.forEach(item => {
    router.get(`/api/${item.type}`, async (ctx) => {
        ctx.body = await fetchUrl(item);
    });
})

module.exports = router;