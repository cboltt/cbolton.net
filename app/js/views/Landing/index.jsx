import React, { Component } from 'react';
import { Link } from 'react-router';

import ViewHeader from '../../components/Global/ViewHeader';

export default class Landing extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className='Landing'>
        <ViewHeader title={ 'Code & Confusion' } />
        { children }
      </div>
    );
  }
}
Landing.propTypes = {
  children: React.PropTypes.node,
};
Landing.defaultProps = {
  children: '',
};
