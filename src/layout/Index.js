import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Icon, Menu } from 'antd';
import Juejin from '../apps/juejin';
import Segmentfault from '../apps/segmentfault';

const MenuItem = Menu.Item;
function Index() {
  return (
    <div>
      <Menu>
        <MenuItem>
          <Link to="/juejin"><Icon className="icon" type="tool" />掘金</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/segmentfault"><Icon className="icon" type="area-chart" />segmentfault</Link>
        </MenuItem>
      </Menu>
      <Switch>
        <Route path="/juejin" component={Juejin} />
        <Route path="/segmentfault" component={Segmentfault} />
      </Switch>
    </div>
  );
}

export default Index;
