'use strict';

const fs = require('fs');
const argv = require('yargs').argv;
const router = require('./router/index');
const ejs = require('koa-ejs');
const path = require('path');
const http = require('http');
const koa = require('koa');
const mount = require('koa-mount');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const session = require('koa-session-minimal');
const MysqlSession = require('koa-mysql-session');
const { database } = require('../config');
const app = new koa();
const appStatic = new koa();
const PORT = argv.p || 8039;

// 配置存储session信息的mysql
let store = new MysqlSession({
  user: database.USERNAME,
  password: database.PASSWORD,
  database: database.DATABASE,
  host: database.HOST,
});

app.use(koaBody());

appStatic.use(koaStatic(path.join(__dirname, '../../public'), {
  maxage: 0
}));
app.use(mount('/', appStatic))

process.title = '';

ejs(app, {
  root: path.join(__dirname, 'view'),
  viewExt: 'ejs',
  cache: false,
  layout: false,
  debug: true
});

app.use(session({
  key: 'SESSION_ID',
  store,
  cookie: {                   // 与 cookie 相关的配置
    domain: 'localhost',    // 写 cookie 所在的域名
    path: '/',              // 写 cookie 所在的路径
    maxAge: 1000 * 300,      // cookie 有效时长
    httpOnly: true,         // 是否只用于 http 请求中获取
    overwrite: false        // 是否允许重写
  }
}));

app.use(router.routes())
  .use((router.allowedMethods()));

//@FIXIT
app.on('error', function (err) {
  console.log(err);
})

app.listen(PORT, function (err) {
  if (!err) console.log('Server start at http://localhost:%s', PORT)
  else throw err
});




