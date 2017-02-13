import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'app',
  prefix: 'v-',
});

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div { ...classes() }>
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
