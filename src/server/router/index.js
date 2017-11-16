const Router = require('koa-router');
const fetchUrl = require('../utils/fetch_url');
const userController = require('../controllers/user');

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
});

router.get('/api/user/findAll', async (ctx) => {
  ctx.body = await userController.findAll();
});

router.post('/api/user/create', async (ctx) => {
  ctx.body = await userController.create(JSON.parse(ctx.request.body));
});

router.post('/api/user/login', (ctx) => {
  ctx.session = {
    ...JSON.parse(ctx.request.body)
  }
  ctx.body = ctx.session;
});

router.get('/api/user/del', (ctx) => {
  ctx.session = null;
  ctx.body = '您已注销';
})

module.exports = router;