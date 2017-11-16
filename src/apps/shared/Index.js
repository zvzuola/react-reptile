import React, { Component } from 'react';
import { Spin } from 'antd';

export default options => () => class Index extends Component {
  state = {
    loading: true,
    list: [],
  }
  componentDidMount() {
    fetch(options.url)
      .then(response => response.json())
      .then((list) => {
        this.setState({ list, loading: false });
      });
  }

  list() {
    return this.state.list.map(item =>
      <li key={item.link}><a target="_blank" href={item.link}>{item.title || item.link}</a></li>);
  }

  render() {
    return this.state.loading
      ? <div style={{ textAlign: 'center' }}><Spin /></div>
      : <div style={{ padding: '20px' }}><ul>{this.list()}</ul></div>;
  }
};
