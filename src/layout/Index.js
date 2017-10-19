import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Icon, Menu, Layout } from 'antd';
import Juejin from '../apps/juejin';
import Segmentfault from '../apps/segmentfault';

const { Sider, Content } = Layout;
const MenuItem = Menu.Item;
const Index = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider>
      <Menu theme="dark">
        <MenuItem>
          <Link to="/juejin"><Icon className="icon" type="tool" />掘金</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/segmentfault"><Icon className="icon" type="area-chart" />segmentfault</Link>
        </MenuItem>
      </Menu>
    </Sider>
    <Layout>
      <Content>
        <Switch>
          <Route path="/juejin" component={Juejin} />
          <Route path="/segmentfault" component={Segmentfault} />
        </Switch>
      </Content>
    </Layout>
  </Layout>
);

export default Index;
