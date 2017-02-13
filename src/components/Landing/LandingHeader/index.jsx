import React, { Component } from 'react';
import { Link } from 'react-router';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'landingHeader',
  prefix: 'c-',
});


export default class LandingHeader extends Component {
  render() {
    const {
      links,
    } = this.props;

    const linkItems = links.map((link, idx) =>
      <li key={ idx }>
        <a href={ link.url } target='_blank' { ...classes('link') }>
          { link.text }
        </a>
      </li>,
    );
    return (
      <div { ...classes() }>
        <h1 { ...classes('title') }>
          <span { ...classes('title', 'line', 'first') }>Chris</span>
          <span { ...classes('title', 'line', 'second') }>Bolton</span>
        </h1>
        <ul { ...classes('links') }>
          {linkItems}
        </ul>
      </div>
    );
  }
}
LandingHeader.propTypes = {
  links: React.PropTypes.array.isRequired,
}
