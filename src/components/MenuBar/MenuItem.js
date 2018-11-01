import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link, NavLink } from 'react-router-dom';

const MenuItem = (props) => {

  const goTo = path => {
    console.log('called goTo', path);
  }

  return (
    <div className="menu-item d-inline-block">
      <NavLink to={props.path} activeClassName="selected">
        {props.label}
      </NavLink>
    </div>
  );
  
}

MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default MenuItem;