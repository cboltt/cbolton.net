import React, { Component } from 'react';
import { Link } from 'react-router';
import BEMHelper from 'react-bem-helper';

const TabCount = ({ tabCount }) => {

  const classes = new BEMHelper({
    name: 'tabCount',
    prefix: 'c-',
  });

  const tabCountInt = parseInt(tabCount);

  let details = "Looks like my browser may have just restarted"

  if(tabCountInt >= 20) {
    details = "I have a bit of a problem (and a lot of RAM)."
  } else if(tabCount >= 1) {
    details = "I'm taking it pretty easy today."
  } else {
    return null;
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

TabCount.propTypes = {
  tabCount: React.PropTypes.string
}

TabCount.defaultProps = {
  tabCount: "1"
}

export default TabCount;
