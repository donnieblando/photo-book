import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './_Body.scss';

const Body = (props) => {

  return (
    <div className="body">
      <div className="my-container">
        {props.children}
      </div>
    </div>
  );
  
}

Body.propTypes = {

};

export default Body;