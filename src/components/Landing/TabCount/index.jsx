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

    let details = "Looks like my browser may have just restarted"
      if(parseInt(tabCount) >= 20) {
        details = "I have a bit of a problem (and a lot of RAM)."
      } else {
        details = "I'm taking it pretty easy today."
      }

    return (
      <div { ...classes() }>
        <h1 { ...classes('count') }>
          { tabCount }
        </h1>
        <p { ...classes('details') }>
          That's how many tabs I have open at the moment on my laptop. { details }
        </p>
      </div>
    );
  }
}
TabCount.propTypes = {
  tabCount: React.PropTypes.string
}

TabCount.defaultProps = {
  tabCount: "1"
}
