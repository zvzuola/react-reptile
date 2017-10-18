import React, { Component } from 'react';
import 'whatwg-fetch';

export default options => () => class Index extends Component {
  state = {
    list: [],
  }
  componentDidMount() {
    fetch(options.url)
      .then(response => response.json())
      .then((list) => {
        this.setState({ list });
      });
  }

  list() {
    return this.state.list.map(item =>
      <li key={item.link}><a target="_blank" href={item.link}>{item.title || item.link}</a></li>);
  }

  render() {
    return (
      <ul>
        {this.list()}
      </ul>
    );
  }
};
