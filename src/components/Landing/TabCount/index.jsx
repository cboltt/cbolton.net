import React, { Component } from 'react';
import { Link } from 'react-router';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'tabCount',
  prefix: 'c-',
});


export default class TabCount extends Component {
  render() {
    const {
      tabCount
    } = this.props;

    return (
      <div { ...classes() }>
        <h1 { ...classes('count') }>
          { tabCount }
        </h1>
        <p { ...classes('details') }>
          That's how many tabs I have open at the moment. I'm a bit of a busy person.
        </p>
      </div>
    );
  }
}
TabCount.propTypes = {
  tabCount: React.PropTypes.string
}

TabCount.defaultProps = {
  tabCount: "0"
}
