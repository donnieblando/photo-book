import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Module.scss';

const Module = props => {

  return (
    <div className="module p-1 p-md-4">
      {props.children}
    </div>
  );
  
}

Module.propTypes = {
  
};

export default Module;