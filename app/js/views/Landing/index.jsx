import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Landing extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className='Landing'>
        <h1>Welcome to landing!</h1>

        { children }
      </div>
    );
  }
}
