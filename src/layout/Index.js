import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Icon, Menu } from 'antd';
import Juejin from '../apps/juejin';

const MenuItem = Menu.Item;
function Index() {
  return (
    <div>
      <Menu>
        <MenuItem>
          <Link to="/juejin">掘金</Link>
        </MenuItem>
      </Menu>
      <Switch>
        <Route path="/juejin" component={Juejin} />
      </Switch>
    </div>
  );
}

export default Index;
