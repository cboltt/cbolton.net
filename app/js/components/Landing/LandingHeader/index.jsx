import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LandingHeader extends Component {
  render() {
    const {
      subtitle,
      links,
    } = this.props;

    const linkItems = links.map((link, idx) =>
      <a key={ idx } href={ link.url }>
        <li>
          { link.text }
        </li>
      </a>,
    );
    return (
      <div className='LandingHeader'>
        <h1>
          <span className='first-line'>Chris</span>
          <span className='second-line'>Bolton</span>
        </h1>
        {subtitle ?
          '<span>{subtitle}</span>' : ''
        }
        <ul>
          {linkItems}
        </ul>
      </div>
    );
  }
}
LandingHeader.propTypes = {
  subtitle: React.PropTypes.string,
  links: React.PropTypes.array.isRequired,
}
