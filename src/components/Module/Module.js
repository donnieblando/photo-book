import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Module.scss';

const Module = props => {

  return (
    <div className={props.cls || "col-12 col-md-6"}>
      <div className="module p-1 p-md-4">
        {props.children}
      </div>
    </div>
  );
  
}

Module.propTypes = {
  cls: PropTypes.string
};

export default Module;