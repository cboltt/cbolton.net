import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ViewHeader extends Component {
  render() {
    const {
      title,
      subtitle,
      links,
    } = this.props;

    // const linkItems = links.map((link, idx) =>
    //   <Link key={ idx } to={ link.href }>
    //     <li>
    //       {link.text}
    //     </li>
    //   </Link>
    // );
    return (
      <div className='ViewHeader'>
        <h1>{title}</h1>
        <span>{subtitle}</span>

      </div>
    );
  }
}
