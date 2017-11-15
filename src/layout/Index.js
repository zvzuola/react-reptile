import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Icon, Menu, Layout, Button } from 'antd';
import 'whatwg-fetch';
import Juejin from '../apps/juejin';
import Segmentfault from '../apps/segmentfault';
import Toutiao from '../apps/toutiao';

const { Sider, Content } = Layout;
const MenuItem = Menu.Item;
const menus = [
  {
    icon: 'tool',
    to: '/juejin',
    text: '掘金',
    component: Juejin,
  }, {
    icon: 'tool',
    to: '/segmentfault',
    text: 'segmentfault',
    component: Segmentfault,
  }, {
    icon: 'tool',
    to: '/toutiao',
    text: '开发者头条',
    component: Toutiao,
  },
];
const MenuContainer = () => {
  const menuItems = menus.map(item => (
    <MenuItem key={item.to}>
      <Link to={item.to}><Icon className="icon" type={item.icon} />{item.text}</Link>
    </MenuItem>
  ));
  return (
    <Menu theme="dark">
      {menuItems}
    </Menu>
  );
};

const RouteContainer = () => {
  const routes = menus.map(item => (
    <Route key={item.to} path={item.to} component={item.component} />
  ));
  return (
    <Switch>
      {routes}
    </Switch>
  );
};

const create = () => {
  fetch('/api/user/create', {
    method: 'POST',
    body: JSON.stringify({
      name: 'zv',
      nick: 'zvzuola',
      password: '666666',
      gender: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }),
  })
    .then(response => response.json())
    .then((res) => {
      console.log(res);
    });
};

const Index = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider>
      <MenuContainer />
    </Sider>
    <Layout>
      <Content>
        <Button onClick={create}>创建用户</Button>
        <RouteContainer />
      </Content>
    </Layout>
  </Layout>
);

export default Index;
