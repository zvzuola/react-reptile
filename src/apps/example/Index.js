import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const App = (props) => {
  console.log(props.list);
  return (<div>{props.children}</div>);
};

const mapStateToProps = state => ({
  list: state.list,
});
export default withRouter(connect(mapStateToProps)(App));
