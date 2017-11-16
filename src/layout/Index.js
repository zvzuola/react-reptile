import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Icon, Menu, Layout } from 'antd';
import Juejin from '../apps/juejin';
import Segmentfault from '../apps/segmentfault';
import Toutiao from '../apps/toutiao';

const { Sider, Content } = Layout;
const MenuItem = Menu.Item;
const menus = [
  {
    icon: 'tool',
    to: 'juejin',
    text: '掘金',
    component: Juejin,
  }, {
    icon: 'tool',
    to: 'segmentfault',
    text: 'segmentfault',
    component: Segmentfault,
  }, {
    icon: 'tool',
    to: 'toutiao',
    text: '开发者头条',
    component: Toutiao,
  },
];

const Index = ({ match }) => {
  const url = match.url === '/' ? '' : match.url;
  const MenuContainer = () => {
    const menuItems = menus.map(item => (
      <MenuItem key={item.to}>
        <Link to={`${url}/${item.to}`}><Icon className="icon" type={item.icon} />{item.text}</Link>
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
      <Route key={`${url}/${item.to}`} path={`${url}/${item.to}`} component={item.component} />
    ));
    return (
      <Switch>
        {routes}
      </Switch>
    );
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <MenuContainer />
      </Sider>
      <Layout>
        <Content>
          <RouteContainer />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
