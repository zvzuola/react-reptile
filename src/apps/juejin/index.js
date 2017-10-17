import React, { Component } from 'react';
import 'whatwg-fetch';

class Juejin extends Component {
  state = {
    list: [],
  }
  componentDidMount() {
    fetch('/api/juejin')
      .then(response => response.json())
      .then((list) => {
        this.setState({ list });
      });
  }

  list() {
    return this.state.list.map(item =>
      <li key={item.link}><a href={item.link}>{item.title || item.link}</a></li>);
  }

  render() {
    return (
      <ul>
        {this.list()}
      </ul>
    );
  }
}

export default Juejin;
