import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        { children }
      </div>
    );
  }
}
App.propTypes = {
  children: React.PropTypes.node,
};
App.defaultProps = {
  children: '',
};
